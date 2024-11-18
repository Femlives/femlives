import { submitRequestNewVerificationEmail } from '@/actions/auth';
import Input from '@/components/Input';
import FormWrapper from '@/components/FormWrapper';
import { ValidatorName } from '@/validators/app';

const RequestNewVerificationEmailForm = () => {
  return (
    <FormWrapper
      validatorName={ValidatorName.VERIFICATION_EMAIL}
      onSubmit={submitRequestNewVerificationEmail}
      submitButtonLabel='Get verification email'
    >
      <Input
        name='email'
        id='email'
        placeholder='Email'
        label='Email'
        type='email'
        required
      />
    </FormWrapper>
  );
};

export default RequestNewVerificationEmailForm;
