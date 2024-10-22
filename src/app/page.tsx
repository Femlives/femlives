import { submitEmailSignUp } from '@/actions/form-submits';
import { z } from 'zod'; // Import Zod for schema validation
import FormWrapper from '@/components/FormWrapper';
import Input from '@/components/Input';

// Define the Zod schema for email validation
const emailValidator = z.object({
  emailAddress: z.string().email('Please enter a valid email address'),
});

export default function Home() {
  return (
    <main>
      <h1 className='text-5xl'>Femlives</h1>
      <FormWrapper
        onSubmit={submitEmailSignUp}
        validator={emailValidator} // Pass the Zod schema here
        submitButtonLabel='SignUp'
      >
        <Input
          label='Email Address'
          placeholder='type your email address'
          id='emailAddress'
          name='emailAddress' // Make sure this matches the schema
        />
      </FormWrapper>
    </main>
  );
}
