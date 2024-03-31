import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFirebase } from '../contextAPI/Firebase';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignupSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is Required'),
  password: Yup.string().required('Strong password is Required').min(6).max(10),
  username: Yup.string().required('Username is Required')
});

const Signup = () => {
  const navigate = useNavigate();
  const firebase = useFirebase();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (firebase.signup || firebase.isLogin) {
      // Use navigate from react-router-dom to redirect to the login page
      navigate('/login');
    }
  }, [firebase.signup, firebase.isLogin, navigate]); // Include navigate in the dependency array

  const handleSubmit = async (values) => {
    try {
      setIsLoading(true);
      await firebase.signupUserWithEmailAndPass(values.email, values.password);
      setIsLoading(false);
      // After successful signup, navigate to the login page
      navigate('/login');
      toast.success("Signup successful!");
    } catch (error) {
      setIsLoading(false);
      toast.error(error.message); // Simplified error handling
    }
  };


  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-8 px-4 bg-gray-100'>
      <div className='w-full max-w-md'>

        <h1 className='text-3xl font-bold text-center mb-4'>Join Our Community</h1>
        <p className='text-lg text-center mb-6 text-gray-600'>Sign up now to unlock exclusive offers!</p>
        <div className='bg-white rounded-lg shadow-md p-6'>
          <Formik
            initialValues={{ email: '', password: '', username: '' }}
            validationSchema={SignupSchema}
            onSubmit={(values, actions) => {
              handleSubmit(values, actions);
            }}
          >
            {({ isSubmitting }) => (
              <Form>
                <Field
                  type='text'
                  id='username'
                  name='username'
                  placeholder='Username'
                  className='w-full px-4 py-3 mb-1 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500'
                />
                <ErrorMessage name='username' component='div' className='text-red-500' />

                <Field
                  type='email'
                  id='email'
                  name='email'
                  placeholder='Your Email'
                  className='w-full px-4 py-3 mt-3 mb-1 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500'
                />
                <ErrorMessage name='email' component='div' className='text-red-500' />

                <Field
                  type='password'
                  id='password'
                  name='password'
                  placeholder='Choose a Password'
                  className='w-full px-4 py-3 mt-3 mb-1 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500'
                />
                <ErrorMessage name='password' component='div' className='text-red-500' />

                <button
                  type='submit'
                  disabled={isSubmitting}
                  className='w-full px-4 py-3 mt-3 text-lg text-white bg-indigo-500 rounded-lg hover:bg-indigo-700 focus:outline-none'
                >
                  {isLoading ? <div className="dotspinner mx-auto" /> : 'Sign up'}
                </button>
              </Form>
            )}
          </Formik>
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
