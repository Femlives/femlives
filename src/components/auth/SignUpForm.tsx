import React, { useState } from 'react';
import { submitSignUp } from '@/actions/auth/sign-up';
import Input from '@/components/Input';

const SignUpForm: React.FC = () => {
  const [formData, setFormData] = useState({
    userName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null); // Clear previous errors

    try {
      const response = await submitSignUp(formData);

      if (response.status !== 201) {
        // Adjust status code as needed
        setError(response.message || 'Sign-up failed');
      } else {
        // Redirect to verify email page or show success message
        window.location.href = response.redirectRoute || '/default-redirect'; // Provide a fallback route
      }
    } catch (err) {
      setError('An error occurred during sign-up');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && <p className='error-message'>{error}</p>}

      <Input
        name='userName'
        id='userName'
        placeholder='User name'
        label='User name'
        type='text'
        value={formData.userName}
        onChange={handleChange}
        required
      />

      <Input
        name='email'
        id='email'
        placeholder='Email'
        label='Email'
        type='email'
        value={formData.email}
        onChange={handleChange}
        required
      />

      <Input
        name='password'
        id='password'
        placeholder='Password'
        label='Password'
        type='password'
        value={formData.password}
        onChange={handleChange}
        required
      />

      <Input
        name='confirmPassword'
        id='confirmPassword'
        placeholder='Confirm password'
        label='Confirm password'
        type='password'
        value={formData.confirmPassword}
        onChange={handleChange}
        required
      />

      <button type='submit'>Sign Up</button>
    </form>
  );
};

export default SignUpForm;
