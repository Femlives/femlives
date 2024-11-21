'use server';

import { createEmailAddress } from '@/api/db/email-addresses';

import { sendEmailSignUpVerificationEmail } from '../email';
import { ZodError } from 'zod';
import { ServerActionResponse, EmailSignupPayload } from '@/types/app';
import { HttpStatusCode } from '@/enums';
import { assertIsString } from '@/util/asserts';
import { readToken } from '../token';
import { parseDataWithZodValidator, ValidatorName } from '@/validators/app';
import { EmailAddressDto } from '@/types/api/db';

export const submitEmailSignUp = async (
  data: unknown
): Promise<ServerActionResponse> => {
  try {
    assertIsString(data);

    const decrypted = await readToken<EmailSignupPayload>(
      data,
      'AUTH_TOKEN_SECRET'
    );

    const validated = parseDataWithZodValidator<EmailAddressDto>(
      decrypted,
      ValidatorName.EMAIL_ADDRESS
    );

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
