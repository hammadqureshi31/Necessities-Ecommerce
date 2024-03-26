import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFirebase } from '../contextAPI/Firebase';

const Signup = () => {
  const navigate = useNavigate();
  const firebase = useFirebase();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');

  const handleClick = async (e) => {
    e.preventDefault();
    await firebase.signupUserWithEmailAndPass(email, password);
  };

  useEffect(() => {
    if (firebase.signup) {
      navigate('/login');
      alert('Signup Successfully....')
    }
  }, [firebase.signup, navigate]);

  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-8 px-4 bg-gray-100'>
      <div className='w-full max-w-md'>
        <h1 className='text-3xl font-bold text-center mb-4'>Join Our Community</h1>
        <p className='text-lg text-center mb-6 text-gray-600'>Sign up now to unlock exclusive offers!</p>
        <div className='bg-white rounded-lg shadow-md p-6'>
          <input
            type='email'
            id='email'
            placeholder='Your Email'
            required
            className='w-full px-4 py-3 mb-4 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type='password'
            id='password'
            placeholder='Choose a Password'
            required
            className='w-full px-4 py-3 mb-4 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type='password'
            id='repeatPassword'
            placeholder='Repeat Password'
            required
            className='w-full px-4 py-3 mb-4 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500'
            value={repeatPassword}
            onChange={(e) => setRepeatPassword(e.target.value)}
          />
          <button onClick={handleClick} className='w-full px-4 py-3 text-lg text-white bg-indigo-500 rounded-lg hover:bg-indigo-700 focus:outline-none'>
            Sign Up
          </button>
        </div>
        <div className='mt-4 text-center'>
          <p className='text-gray-600'>Already have an account?</p>
          <span className='text-indigo-500 cursor-pointer' onClick={() => navigate('/login')}>
            Log In
          </span>
        </div>
      </div>
    </div>
  );
};

export default Signup;
