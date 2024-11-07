'use server';

import { resendSendEmailSignUpVerificationEmail } from '@/api/email';
import { EmailResponse } from '@/types/api/email';

export const sendEmailSignUpVerificationEmail = async (
  email: string
): Promise<EmailResponse> => {
  try {
    return await resendSendEmailSignUpVerificationEmail(email);
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
    throw error;
  }
};
