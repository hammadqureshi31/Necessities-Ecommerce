import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Logging in with:', email, password);
    navigate('/'); 
  };

  const handleRememberMeChange = () => {
    setRememberMe(!rememberMe);
  };

  const handleSignInWithGoogle = () => {
    console.log('Signing in with Google');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-8 px-4 bg-gray-100">
      <div className="w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-4">Welcome Back</h1>
        <form onSubmit={handleLogin} className="bg-white rounded-lg shadow-md p-6">
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-3 mb-4 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Your Password"
            className="w-full px-4 py-3 mb-4 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <div className="flex items-center justify-between  gap-8 mb-4">
            <label htmlFor="rememberMe" className="flex items-center">
              <input
                type="checkbox"
                id="rememberMe"
                checked={rememberMe}
                onChange={handleRememberMeChange}
                className="mr-2 leading-tight"
              />
              <span className="text-xs sm:text-sm text-nowrap">Remember me</span>
            </label>
            <span className="text-indigo-500 text-xs sm:text-sm cursor-pointer text-nowrap" onClick={() => navigate('/forgot-password')}>
              Forgot Password?
            </span>
          </div>
          <button type="submit" className="w-full px-4 py-3 text-lg text-white bg-indigo-500 rounded-lg hover:bg-indigo-700 focus:outline-none">
            Log In
          </button>
          <div className="mt-4 text-center">
            <span className="text-indigo-500 cursor-pointer" onClick={handleSignInWithGoogle}>
              Sign in with Google
            </span>
          </div>
        </form>
        <div className="mt-4 text-center">
          <p className="text-gray-600">Don't have an account?</p>
          <span className="text-indigo-500 cursor-pointer" onClick={() => navigate('/signup')}>
            Sign Up
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
