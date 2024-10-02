"use client";
import { useState, useEffect } from 'react';
import { Button } from './ui/button';

interface Problem {
  title: string;
  description: string;
  testCases: Array<{ input: string; expectedOutput: string }>;
}

interface ChatWindowProps {
  code: string;
  problem: Problem;
  fetchAIHint: (message: string) => void; // Update function signature
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
    <div className='mr-14' style={{ marginTop: '20px', padding: '10px', border: '1px solid #ddd', borderRadius: '4px' }}>
      <h3>Chat Window</h3>
      <p>Ask the AI for hints or suggestions!</p>

      <div style={{ marginBottom: '10px' }}>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your question here..."
          style={{ width: '100%', padding: '8px', marginBottom: '10px', borderRadius: '4px', border: '1px solid #ddd' }}
        />
        <Button onClick={handleFetchHint} style={{ marginTop: '10px' }}>
          Get Hint from AI
        </Button>
      </div>

      {response && (
        <div style={{ marginBottom: '10px', backgroundColor: '#f0f0f0', padding: '10px', borderRadius: '4px' }}>
          <strong>AI Hint:</strong> {response}
        </div>
      )}
    </div>
  );
};

export default ChatWindow;
