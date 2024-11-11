import React from 'react';
import SignUpForm from '@/components/auth/SignUpForm';

const SignUpPage: React.FC = () => {
  return (
    <div className='signup-page'>
      <h1>Sign Up</h1>
      <p>Please fill in your details to create a new account.</p>
      <SignUpForm />
    </div>
  );
};

export default SignUpPage;
