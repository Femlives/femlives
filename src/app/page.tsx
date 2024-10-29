import { submitEmailSignUp } from '@/actions/form-submits';
import { ValidatorName } from '@/validators/app';
import FormWrapper from '@/components/FormWrapper';
import Input from '@/components/Input';

export default function Home() {
  return (
    <main>
      <h1 className='text-5xl'>Femlives</h1>
      <FormWrapper
        onSubmit={submitEmailSignUp}
        validatorName={ValidatorName.EMAIL_ADDRESS}
        submitButtonLabel='SignUp'
      >
        <Input
          label='Email Address'
          placeholder='type your email address'
          id='emailAddress'
        />
      </FormWrapper>
    </main>
  );
}
