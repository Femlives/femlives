import { submitEmailSignUp } from '@/actions/form-submits';
import { z } from 'zod';
import FormWrapper from '@/components/FormWrapper';
import Input from '@/components/Input';

const emailValidator = z.object({
  email: z.string().email('Please enter a valid email address'),
});

export default function Home() {
  return (
    <main>
      <h1 className='text-5xl'>Femlives</h1>
      <FormWrapper
        onSubmit={submitEmailSignUp}
        validator={emailValidator}
        submitButtonLabel='SignUp'
      >
        <Input
          label='Email Address'
          placeholder='type your email address'
          id='emailAddress'
          name='emailAddress'
        />
      </FormWrapper>
    </main>
  );
}
