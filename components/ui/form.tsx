'use client';


import { Input } from '@/components/ui/input';
import { useState } from 'react';
import ButtonPrimary from './button1';

interface FormProps {
  handleSubmit: (email: string, password: string) => void;
  isLogin: boolean;
  setIsLogin: (isLogin: boolean) => void;
}

export default function Form({ handleSubmit, isLogin, setIsLogin }: FormProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSubmit(email, password);
  };

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Email:</label>
        <Input
          type="email"
          value={email}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="mt-1 block w-full"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Password:</label>
        <Input
          type="password"
          value={password}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
          placeholder="Enter your password"
          className="mt-1 block w-full"
          required
        />
      </div>
      <ButtonPrimary innerHtml={isLogin ? 'Login' : 'Sign Up'} type="submit" className="w-full mt-4" />
    </form>
  );
}