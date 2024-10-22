'use server';

import { createEmailAddress } from '@/api/db/email-addresses';
import { zEmailAddressDto } from '@/api/db/validators';
import { sendEmailSignUpVerificationEmail } from '../email';
import { ZodError } from 'zod';
import { FormSubmitResponse } from '@/types/app';
import { HttpStatusCode } from '@/enums';

export const submitEmailSignUp = async (
  data: unknown
): Promise<FormSubmitResponse> => {
  try {
    const { email } = zEmailAddressDto.parse(data);
    await createEmailAddress(email);
    await sendEmailSignUpVerificationEmail(email);
    return {
      status: HttpStatusCode.CREATED,
      success: true,
    };
  } catch (error) {
    if (error instanceof ZodError) {
      throw new Error('Could not validate input data');
    }
    if (error instanceof Error) {
      if (error.message.includes('Email must be unique')) {
        return {
          status: HttpStatusCode.CONFLICT,
          success: false,
          error: {
            email: 'Email already in use.',
          },
        };
      }
    }
    throw new Error(`Unknown error during sign up: "${error}"`);
  }
};
