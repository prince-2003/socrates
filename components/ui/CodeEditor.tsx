'use client';

import { useState, useEffect } from 'react';
import Editor from '@monaco-editor/react';

interface CodeEditorProps {
  initialValue?: string;
  language?: string;
  onChange: (value: string) => void;
  height?:number;
}

const CodeEditor = ({ initialValue = '', language = 'javascript', onChange, height }: CodeEditorProps) => {
  const [code, setCode] = useState<string>(initialValue);

  const handleEditorChange = (value: string | undefined) => {
    const safeValue = value || '';
    setCode(safeValue);
    onChange(safeValue);
  };


  return (
    <div className="flex flex-col h-full mx-auto rounded-lg">
      <div className="w-full h-full  subpixel-antialiased rounded bg-transparent flex flex-col">
        <div className="flex items-center h-6 rounded-t bg-gray-100 border-b border-gray-500 text-center text-black">
          <div className="flex ml-2 items-center border-red-900 bg-red-500 shadow-inner rounded-full w-3 h-3"></div>
          <div className="ml-2 border-yellow-900 bg-yellow-500 shadow-inner rounded-full w-3 h-3"></div>
          <div className="ml-2 border-green-900 bg-green-500 shadow-inner rounded-full w-3 h-3"></div>
          <div className="mx-auto pr-16">
            <p className="text-center text-sm">Code</p>
          </div>
        </div>
        <div className="flex-grow">
          <Editor
            height={`${height}px`}
            language={language}
            value={code}
            onChange={handleEditorChange}
            theme="vs-dark"
            options={{
              minimap: { enabled: false },
              fontSize: 14,
              automaticLayout: true,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default CodeEditor;