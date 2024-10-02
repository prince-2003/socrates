'use client';

import { useState, useEffect, useRef } from 'react';
import { db } from '@/lib/firebase';
import { doc, getDoc } from 'firebase/firestore';
import CodeEditor from '@/components/ui/CodeEditor';
import { Button } from '@/components/ui/button';
import ChatWindow from '@/components/ChatWindow';
import axios from 'axios';
import { useToast } from '@/hooks/use-toast'; 

interface TestCase {
  input: string;
  expectedOutput: string;
}

interface Problem {
  id: string;
  question: string;
  title: string;
  description: string;
  testCases: TestCase[];
}

export default function ProblemEvaluationPage({ params }: { params: { id: string } }) {
  const { toast } = useToast(); 
  const [problem, setProblem] = useState<Problem | null>(null);
  const [code, setCode] = useState<string>('');
  const [result, setResult] = useState<string[]>([]);
  const [isHintEnabled, setIsHintEnabled] = useState<boolean>(false);
  const [hints, setHints] = useState<string | null>(null);
  const [isClient, setIsClient] = useState(false); // Ensure client-side rendering

  const [editorWidth, setEditorWidth] = useState<number>(50); // Initial editor width
  const resizerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setIsClient(true); 
  }, []);

  useEffect(() => {
    if (isClient) {
      const fetchProblem = async () => {
        const problemRef = doc(db, 'problems', params.id);
        const problemSnap = await getDoc(problemRef);
        if (problemSnap.exists()) {
          setProblem({ id: problemSnap.id, ...problemSnap.data() } as Problem);
        } else {
          console.error('No such document!');
        }
      };
      fetchProblem();
    }
  }, [isClient, params.id]);

  const runTests = () => {
    if (!problem) return;

    const testResults = problem.testCases.map((tc, index) => {
      try {
        const parsedInput = JSON.parse(tc.input);
        let functionName = null;
        let modifiedCode = code;

        const functionNameMatch = code.match(/function\s+([a-zA-Z0-9_]+)\s*\(/);
        if (functionNameMatch) {
          functionName = functionNameMatch[1];
        } else {
          functionName = '__userFunction__';
          modifiedCode = 'const ' + functionName + ' = ' + code;
        }

        const userFunction = new Function(
          'parsedInput',
          modifiedCode + '; return ' + functionName + '(parsedInput);'
        );
        const userOutput = userFunction(parsedInput);

        const normalizedUserOutput = JSON.stringify(userOutput);
        const normalizedExpectedOutput = JSON.stringify(JSON.parse(tc.expectedOutput));

        return normalizedUserOutput === normalizedExpectedOutput
          ? `Test Case ${index + 1}: Passed`
          : `Test Case ${index + 1}: Failed`;
      } catch (err) {
        console.error(err);
        return `Test Case ${index + 1}: Error`;
      }
    });

    setResult(testResults);

    
    if (testResults.every((r) => r.includes('Passed'))) {
      toast({
        title: "All Test Cases Passed!",
        description: "Great job! All test cases passed successfully.",
      });
    }
  };

  const handleToggleHints = () => {
    setIsHintEnabled((prev) => !prev);
  };

  const fetchAIHint = async () => {
    if (isHintEnabled && problem && problem.id) {
      try {
        const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/ask`, {
          question: problem.question,
          dict_of_vars: { code },
        }, {
          headers: {
            'Content-Type': 'application/json',  
          },
        });
        console.log({ question: problem.question, dict_of_vars: { code } });
        setHints(response.data.hint);
      } catch (error) {
        console.error('Error fetching AI hint:', error);
        setHints('Failed to fetch hint');
      }
    }
  };

 
  
    
    

  return (
    <div className="p-4 flex flex-col md:flex-row">
      {problem ? (
        <>
          <div className="flex flex-col basis-1/4 ">
            <h2 className="text-3xl font-bold mb-6">{problem.title}</h2>
            <p className="mb-4">{problem.description}</p>
            <Button onClick={runTests} className="mt-2 bg-black w-36 text-white">
              Run Tests
            </Button>

            <div className="hintToggle mt-4 mx-4">
              <label>
                <input
                  type="checkbox"
                  checked={isHintEnabled}
                  onChange={handleToggleHints}
                  className="mr-5"
                />
                Enable Hints
              </label>
              <ChatWindow code={code} problem={problem} fetchAIHint={fetchAIHint} hints={hints} />
            </div>

            {result.length > 0 && (
              <div className="mt-4">
                <h3 className="text-lg font-semibold mb-2">Test Case Results:</h3>
                {result.slice(0, 3).map((testResult, index) => (
                  <div
                    key={index}
                    className="p-4 mb-2 bg-gray-100 rounded-lg border border-gray-300"
                  >
                    {testResult}
                  </div>
                ))}
              </div>
            )}
          </div>

          
            <div className="flex-1 basis-3/4">
              <CodeEditor
                initialValue={code}
                language="javascript"
                onChange={setCode}
                
              />
            </div>
          
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
