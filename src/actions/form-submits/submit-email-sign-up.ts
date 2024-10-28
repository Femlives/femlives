'use server';

import { createEmailAddress } from '@/api/db/email-addresses';
import { zEmailAddressDto } from '@/api/db/validators';
import { sendEmailSignUpVerificationEmail } from '../email';
import { ZodError } from 'zod';
import { FormSubmitResponse } from '@/types/app';
import { HttpStatusCode } from '@/enums';
import { assertIsString } from '@/util/asserts';
import { readToken } from '../token';
import { EmailSignupPayload } from '@/types/app/actions/token/payload/email-signup';

export const submitEmailSignUp = async (
  data: unknown
): Promise<FormSubmitResponse> => {
  try {
    assertIsString(data);

    const decrypted = await readToken<EmailSignupPayload>(data);

    const validated = zEmailAddressDto.parse(decrypted);

    await createEmailAddress(validated);

    await sendEmailSignUpVerificationEmail(validated.email);

    return {
      status: HttpStatusCode.CREATED,
    };
  } catch (error) {
    if (error instanceof ZodError) {
      throw new Error('Could not validate input data');
    }
    if (error instanceof Error) {
      if (error.message.includes('Email must be unique')) {
        return {
          status: HttpStatusCode.CONFLICT,
          error: {
            email: 'Email already in use.',
          },
        };
      }
    }
    throw new Error(`Unknown error during sign up: "${error}"`);
  }
};
