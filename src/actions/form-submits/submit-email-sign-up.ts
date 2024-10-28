'use server';

import { createEmailAddress } from '@/api/db/email-addresses';
import { zEmailAddressDto } from '@/validators/api';
import { sendEmailSignUpVerificationEmail } from '../email';
import { ZodError } from 'zod';
import { ServerActionResponse } from '@/types/app';
import { HttpStatusCode } from '@/enums';
import { assertIsString } from '@/util/asserts';
import { readToken } from '../token';
import { EmailSignupPayload } from '@/types/app';

export const submitEmailSignUp = async (
  data: unknown
): Promise<ServerActionResponse> => {
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
      return {
        status: HttpStatusCode.BAD_REQUEST,
        message: 'Could not validate input data',
      };
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

    return {
      status: HttpStatusCode.INTERNAL_SERVER_ERROR,
      message: `Unknown error during sign up: "${error}"`,
    };
  }
};
