'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import RequestNewVerificationEmailForm from './request-new-verification-email-form';
import ConditionWrapper from '@/components/ConditionWrapper';
import { verifyEmail } from '@/actions/auth/verify-email';

type VerifyEmailVerificationTokenProps = {
  token: string;
};

const VerifyEmailVerificationToken: React.FC<
  VerifyEmailVerificationTokenProps
> = ({ token }) => {
  const [error, setError] = useState<string>();
  const [success, setSuccess] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    const verify = async () => {
      try {
        const res = await verifyEmail(token);

        if ('message' in res) {
          setError(res.message);
        } else {
          setSuccess(true);
          setTimeout(() => {
            router.push('/login');
          }, 3000);
        }
      } catch {
        setError('unknown_error');
      }
    };

    if (token) {
      verify();
    }
  }, [token, router]);

  return (
    <>
      <ConditionWrapper condition={!!error?.includes('expired')}>
        <p className='text-center my-5'>
          Well damn, the token is already expired. You can get a new one by
          entering your email below.
        </p>
      </ConditionWrapper>

      <ConditionWrapper condition={!!error && !error.includes('expired')}>
        <p className='text-center my-5'>
          Something went wrong. If this continues to happen, please contact our
          support.
          <br />
          Error: {error}
        </p>
        <RequestNewVerificationEmailForm />
      </ConditionWrapper>

      <ConditionWrapper condition={success}>
        <p className='text-center my-5'>
          Success! You will be redirected to login in a moment...
        </p>
      </ConditionWrapper>

      <ConditionWrapper condition={!error && !success}>
        <p className='text-center my-5'>Verifying your email...</p>
      </ConditionWrapper>
    </>
  );
};

export default VerifyEmailVerificationToken;
