import React from 'react';
import { NextPage } from 'next';
import FormWrapper from '@/components/FormWrapper';
import { ServerActionResponse } from '@/types/app';
import { ValidatorName } from '@/validators/app';
import Input from '@/components/Input';

const SignUpPage: NextPage = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const todoAction = async (data: unknown): Promise<ServerActionResponse> => {
    // https://github.com/Femlives/femlives/issues/43
    'use server';
    return await { status: 200 };
  };

  return (
    <div>
      <h1>Sign Up</h1>
      <p>Please fill in your details to create a new account.</p>
      <FormWrapper
        onSubmit={todoAction}
        validatorName={ValidatorName.SIGN_UP}
        submitButtonLabel='Sign up'
      >
        <Input
          name='userName'
          id='userName'
          placeholder='User name'
          label='User name'
          type='text'
          required
        />

        <Input
          name='email'
          id='email'
          placeholder='Email'
          label='Email'
          type='email'
          required
        />

        <Input
          name='password'
          id='password'
          placeholder='Password'
          label='Password'
          type='password'
          required
        />

        <Input
          name='confirmPassword'
          id='confirmPassword'
          placeholder='Confirm password'
          label='Confirm password'
          type='password'
          required
        />
      </FormWrapper>
    </div>
  );
};

export default SignUpPage;
