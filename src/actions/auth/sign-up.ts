'use server';

import { dbCreateUser } from '@/api/db/user/create-user';
import { HttpStatusCode, Route } from '@/enums';
import { parseDataWithZodValidator, ValidatorName } from '@/validators/app';
import { ServerActionResponse } from '@/types/app';
import { SubmitData } from '@/types/app/submit-data';
import { SignUpFormData } from '@/types/actions';
import { ZodError } from 'zod';

export const submitSignUp = async (
  data: SubmitData
): Promise<ServerActionResponse> => {
  try {
    const validatedData = parseDataWithZodValidator<SignUpFormData>(
      data,
      ValidatorName.SIGN_UP
    );

    await dbCreateUser(validatedData);

    return {
      status: HttpStatusCode.CREATED,
      redirectRoute: Route.VERIFY_EMAIL,
    };
  } catch (error) {
    if (error instanceof ZodError) {
      return {
        status: HttpStatusCode.BAD_REQUEST,
        message: 'Could not validate input data',
      };
    }

    if (
      error instanceof Error &&
      error.message.includes('Email already in use.')
    ) {
      return {
        status: HttpStatusCode.CONFLICT,
        error: {
          email: 'Email already in use.',
        },
      };
    }

    return {
      status: HttpStatusCode.INTERNAL_SERVER_ERROR,
      message: `Unknown error during sign up: "${error}"`,
    };
  }
};
