'use client';

import { useState, useEffect } from 'react';
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

  useEffect(() => {
    const verify = async () => {
      const res = await verifyEmail(token);

      if ('message' in res) {
        setError(res.message);
      }
    };

    if (token) {
      verify();
    }
  }, [token]);

  return (
    <>
      <ConditionWrapper condition={!!error?.includes('expired')}>
        <p className='text-center my-5'>
          Well damn, the token is already expired. You can get a new one by
          entering your email below.
        </p>
      </ConditionWrapper>

      <ConditionWrapper condition={!!error?.includes('unknown')}>
        <p className='text-center my-5'>
          Something went wrong. If this continues to happen, please contact our
          support.
          {error}
        </p>
      </ConditionWrapper>

      <ConditionWrapper condition={!!error}>
        <RequestNewVerificationEmailForm />
      </ConditionWrapper>

      <ConditionWrapper condition={!error}>
        <p className='text-center my-5'>
          Success! You will be redirected to login in
        </p>
      </ConditionWrapper>
    </>
  );
};

export default VerifyEmailVerificationToken;
