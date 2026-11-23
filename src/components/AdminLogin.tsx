import { useState } from 'react';
import { auth, googleProvider } from '../lib/firebase';
import { signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

export default function AdminLogin() {
  const navigate = useNavigate();
  const handleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      navigate('/admin/dashboard');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
      <h1 className="text-2xl font-bold mb-4">Admin Login</h1>
      <button onClick={handleLogin} className="bg-white text-black p-4 rounded">Login with Google</button>
    </div>
  );
}
