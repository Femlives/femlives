// src/actions/auth/sign-up.ts
'use server';

import { dbCreateUser } from '@/api/db/user/create-user';
import { HttpStatusCode, Route } from '@/enums';
import { parseDataWithZodValidator } from '@/validators/app';
import { ServerActionResponse } from '@/types/app';
import { SubmitData } from '@/types/app/submit-data';
import { SignUpFormData } from '@/types/actions';
import { ZodError } from 'zod'; // Import ZodError from Zod
import { ValidatorName } from '@/validators/app'; // Make sure ValidatorName is imported correctly

export const submitSignUp = async (
  data: SubmitData
): Promise<ServerActionResponse> => {
  try {
    // Validate data using Zod
    const validatedData = parseDataWithZodValidator<SignUpFormData>(
      data,
      ValidatorName.SIGN_UP // Use the ValidatorName enum correctly
    );

    // Create user in the database
    await dbCreateUser(validatedData);

    return {
      status: HttpStatusCode.CREATED,
    };
  } catch (error) {
    // Handle validation error
    if (error instanceof ZodError) {
      return {
        status: HttpStatusCode.BAD_REQUEST,
        message: 'Could not validate input data',
      };
    }

    // Handle unique email conflict
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

    // General error handling
    return {
      status: HttpStatusCode.INTERNAL_SERVER_ERROR,
      message: `Unknown error during sign up: "${error}"`,
    };
  }
};
