'use client';

import { useState, useEffect } from 'react';
import { db } from '@/lib/firebase';
import { doc, getDoc } from 'firebase/firestore';
import CodeEditor from '@/components/ui/CodeEditor';
import { Button } from '@/components/ui/button';

interface TestCase {
  input: string;
  expectedOutput: string;
}

interface Problem {
  id: string;
  title: string;
  description: string;
  testCases: TestCase[];
}

export default function ProblemEvaluationPage({ params }: { params: { id: string } }) {
  const [problem, setProblem] = useState<Problem | null>(null);
  const [code, setCode] = useState<string>('');
  const [result, setResult] = useState<string | null>(null);
  const [isHintEnabled, setIsHintEnabled] = useState<boolean>(false);
  const [editorHeight, setEditorHeight] = useState<number>(400); // Default height for small screens

  useEffect(() => {
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
  }, [params.id]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setEditorHeight(500);
         // Full height for large screens
      } else {
        setEditorHeight(400); // 400px height for smaller screens
      }
    };

    handleResize(); // Set initial height
    window.addEventListener('resize', handleResize); // Update height on window resize

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const runTests = () => {
    if (!problem) return;

    const testResults = problem.testCases.map((tc) => {
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

        return normalizedUserOutput === normalizedExpectedOutput ? 'Passed' : 'Failed';
      } catch (err) {
        console.error(err);
        return 'Error';
      }
    });

    setResult(testResults.join(', '));
  };

  const handleToggleHints = () => {
    setIsHintEnabled((prev) => !prev);
  };

  return (
    <div className="w-[96vw] m-2 rounded-xl p-10 md:p-20 bg-gray-100 flex flex-col lg:flex-row gap-10">
      {problem ? (
        <>
          <div className="card flex flex-col basis-1/4">
            <h2 className="text-3xl font-bold mb-6">{problem.title}</h2>
            <p className="mb-4">{problem.description}</p>
            <Button onClick={runTests} className="mt-2 bg-black w-36 text-white">
              Run Tests
            </Button>
            {result && <p className="mt-2">Test Results: {result}</p>}
            <div className="hintToggle mt-4 mx-4">
              <label>
                <input type="checkbox" checked={isHintEnabled} onChange={handleToggleHints} className="mr-5" />
                Enable Hints
              </label>
            </div>
          </div>

          <div className="flex-1 basis-3/4">
            <CodeEditor initialValue={code} language="javascript" onChange={setCode} height={editorHeight} />
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
