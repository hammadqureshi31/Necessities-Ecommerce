import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFirebase } from '../contextAPI/Firebase';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FcGoogle } from "react-icons/fc";


const Login = () => {
  const navigate = useNavigate();
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const firebase = useFirebase();
  const [loginFailed, setLoginFailed] = useState(false)


  useEffect(() => {
    if (firebase.user) {
      navigate('/');
    }
  }, [firebase.user, navigate]);

  const handleLogin = async (values) => {
    setIsLoading(true);
    try {
      const loginResp = await firebase.loginUserWithEmailAndPass(values.email, values.password);
      setIsLoading(false);
      toast.success('Login successful!');
      setTimeout(() => {
        firebase.setUser(true)
      }, 2000);
    } catch (error) {
      setIsLoading(false);
      setLoginFailed(true);
      toast.error('Invalid credentials');
      console.error("Login error:", error);
    }
  };


  const handleRememberMeChange = () => {
    setRememberMe(!rememberMe);
  };

  const loginValidation = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is Required'),
    password: Yup.string().required('Strong password is Required').min(6, 'Password is too short').max(10, 'Password is too long'),
  });

  return (
    <div className="flex flex-col items-center pt-14 min-h-screen px-4 bg-gray-100">
      <div className="w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-4">Welcome Back</h1>
        <Formik initialValues={{ email: '', password: '' }} validationSchema={loginValidation}
          onSubmit={handleLogin}>
          {() => (
            <Form className="bg-white rounded-lg shadow-md p-6">
              {loginFailed &&
                <div className="text-red-500 flex justify-center items-center mb-2"> Invalid credentials</div>}


              <Field type="email" name="email" placeholder="Your Email" className="w-full px-4 py-3 mb-1 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500" />
              <ErrorMessage name="email" component="div" className="text-red-500" />

              <Field type="password" name="password" placeholder="Your Password" className="w-full px-4 py-3 mt-3 mb-1 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500" />
              <ErrorMessage name="password" component="div" className="text-red-500" />

              <div className="flex items-center justify-between gap-8 mt-3 mb-4">
                <label htmlFor="rememberMe" className="flex items-center">
                  <input type="checkbox" id="rememberMe" checked={rememberMe} onChange={handleRememberMeChange} className="mr-2 leading-tight" />
                  <span className="text-xs sm:text-sm text-nowrap">Remember me</span>
                </label>
                <span className="text-[#84019F] text-xs sm:text-sm cursor-pointer text-nowrap" onClick={() => navigate('/forgot-password')}>
                  Forgot Password?
                </span>
              </div>

              <button type="submit" className="w-full px-4 py-3 text-lg text-white bg-[#84019F] rounded-lg hover:bg-sky-500 focus:outline-none">
                {isLoading ? <div className="dotspinner mx-auto" /> : 'Log in'}
              </button>

              <div className="mt-4 flex text-center justify-center gap-3"
              onClick={()=>firebase.signinWithGoogle()}>
                <span className='text-3xl'><FcGoogle /></span>
                <span className="text-[#84019F] text-lg cursor-pointer">Sign in with Google</span>
              </div>
            </Form>
          )}
        </Formik>
        <ToastContainer />


        <div className="mt-4 text-center">
          <p className="text-gray-600">Don't have an account?</p>
          <span className="text-indigo-500 cursor-pointer" onClick={() => navigate('/signup')}>Sign Up</span>
        </div>
      </div>


    </div>
  );
};

export default Login;
