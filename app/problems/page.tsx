'use client';

import { useState, useEffect } from 'react';
import { db } from '@/lib/firebase';
import { collection, getDocs } from 'firebase/firestore';
import Link from 'next/link';

interface Problem {
  id: string;
  title: string;
  description: string;
}

export default function EvaluatePage() {
  const [problems, setProblems] = useState<Problem[]>([]);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); 
  }, []);

  useEffect(() => {
    if (isClient) {
      const fetchProblems = async () => {
        try {
          const querySnapshot = await getDocs(collection(db, 'problems'));
          const problemData: Problem[] = querySnapshot.docs.map(doc => {
            const data = doc.data();
            return {
              id: doc.id,
              title: data.title || '',
              description: data.description || '',
            };
          });
          setProblems(problemData);
        } catch (error) {
          console.error('Error fetching problems:', error);
        }
      };

      fetchProblems();
    }
  }, [isClient]);

  if (!isClient) {
   
    return <div>Loading...</div>;
  }

  return (
    <div className="p-4 w-[70%] mx-auto mt-6">
      <h2 className="text-3xl font-bold mb-6">Problems</h2>
      <div className="problem-list mb-6">
        {problems.map((problem) => (
          <Link key={problem.id} href={`/problems/${problem.id}`} passHref>
            <div className="problem-item p-4 mb-4 bg-white rounded-lg shadow cursor-pointer hover:shadow-l transition-shadow">
              <h3 className="text-xl font-semibold">{problem.title}</h3>
              <p>{problem.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
