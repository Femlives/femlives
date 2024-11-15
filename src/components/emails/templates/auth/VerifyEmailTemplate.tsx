import * as React from 'react';
import { Html, Head, Heading } from '@react-email/components';
import { parsedEnv } from '@/util/helper';
import { Route } from '@/enums';
import { FCProps } from '@/types/app';
import FormWrapper from '../../../FormWrapper';
import { Button } from '@/components/Button';
import { submitRequestNewVerificationEmail } from '@/actions/auth';
import { ValidatorName } from '@/validators/app/util/get-form-data-validator/get-form-data-validator';

type VerifyEmailTemplateProps = {
  token: string;
};

export const VerifyEmailTemplate: FCProps<VerifyEmailTemplateProps> = ({
  token,
}) => {
  const url = `${parsedEnv.HOST}${Route.VERIFY_EMAIL}?token=${token}`;

  return (
    <Html lang='en' dir='ltr'>
      <Head>
        <title>Verify email</title>
        <Heading>Verify email</Heading>
      </Head>
      <FormWrapper
        onSubmit={submitRequestNewVerificationEmail}
        validatorName={ValidatorName.VERIFICATION_EMAIL}
        submitButtonLabel='Verify Email'
      >
        <h2>Almost done!</h2>

        <p>Please click the button below to verify your email</p>

        <Button buttonLabel='Verify Email' url={url}></Button>
      </FormWrapper>
    </Html>
  );
};
