"use client";
import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import ButtonPrimary from './ui/button1';

interface Problem {
  title: string;
  description: string;
  testCases: Array<{ input: string; expectedOutput: string }>;
}

interface ChatWindowProps {
  code: string;
  problem: Problem;
  fetchAIHint: (message: string) => void; 
  hints: string | null;
}

const ChatWindow = ({ fetchAIHint, hints, problem }: ChatWindowProps) => {

  const [response, setResponse] = useState<string | null>(null);
  const [message, setMessage] = useState<string>('');
  const handleFetchHint = () => {
    fetchAIHint(message);
  }
  useEffect(() => {
    if (hints) {
      setResponse(hints);
    }
  }, [hints]);



  return (
    <div className='bg-gray-300 bg-opacity-30 backdrop-filter backdrop-blur-xl rounded-lg p-4 text-black/80 mb-4' >
      <h3 className='text-2xl font-bold'>Chat Window</h3>
      <p className='text-sm font-light'>Ask the AI for hints or suggestions!</p>

      <div style={{ marginBottom: '10px' }}>
        <input
        className='bg-gray-500 bg-opacity-70 backdrop-filter backdrop-blur-xl w-full rounded-lg my-2 p-4'
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your question here..."
        />
        <ButtonPrimary onClick={handleFetchHint} 
          innerHtml ="Get Hint from AI" bgColor='transparent' >
        </ButtonPrimary>
      </div>

      {response && (
        <div className= "max-h-80 overflow-y-auto p-2" >
          <strong>AI Hint:</strong> {response}
        </div>
      )}
    </div>
  );
};

export default ChatWindow;
