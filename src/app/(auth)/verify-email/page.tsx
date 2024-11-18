import ConditionWrapper from '@/components/ConditionWrapper';
import VerifyEmailVerificationToken from './verify-email-verification-token';
import { isString } from '@/util/type-guards';
import { NextPage } from 'next';
import { AsyncSearchParams } from '@/types/app/async-search-params';
import RequestNewVerificationEmailForm from './request-new-verification-email-form';

interface VerifyEmailPageProps {
  searchParams: AsyncSearchParams;
}

const VerifyEmailPage: NextPage<VerifyEmailPageProps> = async (props) => {
  const searchParams = await props.searchParams;

  //const title = 'Verify email';
  const token = 'token' in searchParams && searchParams.token;

  return (
    <div>
      <ConditionWrapper condition={isString(token)}>
        <VerifyEmailVerificationToken token={token as string} />
      </ConditionWrapper>

      <ConditionWrapper condition={!token}>
        <p className='text-center my-5'>
          We sent you a verification email on registration. To the ADHD gang:
          It&apos;s just a button but be warned: it will expire in one day so
          don&apos;t get too distracted!
        </p>

        <p className='text-center my-5'>
          You can&apos;t find any? Not even in your spam folder? You can try
          again and enter your email below. If an account with your email
          exists, we will send you a new one.
        </p>

        <RequestNewVerificationEmailForm />
      </ConditionWrapper>
    </div>
  );
};

export default VerifyEmailPage;
