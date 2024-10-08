'use client';

import { useState, useEffect } from 'react';
import { db } from '@/lib/firebase';
import { collection, getDocs } from 'firebase/firestore';
import Link from 'next/link';

import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';


interface Problem {
  id: string;
  title: string;
  description: string;
}

export default function EvaluatePage() {
  const [problems, setProblems] = useState<Problem[]>([]);
  const [isClient, setIsClient] = useState(false);
  const [loading, setLoading] = useState(true);


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

        } finally {
          setLoading(false);

        }
      };

      fetchProblems();
    }
  }, [isClient]);

  if (!isClient) {
    return <div className='w-[96vw] m-2 rounded-xl p-10 md:p-20 bg-gray-100'></div>;
  }

  return (
    <div className="w-[96vw] m-2 rounded-xl p-10 md:p-20 bg-gray-100">
      <h2 className="text-3xl font-bold mb-6">Problems</h2>
      <div className="problem-list mb-6">
        {loading ? (
          Array.from({ length: 5 }).map((_, index) => (
            <div key={index} className="problem-item p-4 mb-4 bg-white rounded-lg shadow">
              <Skeleton height={30} width={`60%`} />
              <Skeleton height={20} width={`80%`} />
            </div>
          ))
        ) : (
          problems.map((problem) => (
            <Link key={problem.id} href={`/dashboard/problems/${problem.id}`} passHref>
              <div className="problem-item p-4 mb-4 bg-white rounded-lg shadow cursor-pointer hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold">{problem.title}</h3>
                <p>{problem.description}</p>
              </div>
            </Link>
          ))
        )}
      </div>
    </div>
  );
}

