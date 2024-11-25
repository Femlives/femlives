import { resendSendEmailSignUpVerificationEmail } from '@/api/email';
import { EmailResponse } from '@/types/api/email';
import { VerifyEmailTokenPayload } from '@/types/app';
import { generateAuthToken } from '../token';

export const sendEmailSignUpVerificationEmail = async (
  email: string
): Promise<EmailResponse> => {
  try {
    const payload: VerifyEmailTokenPayload = { email };
    const token = await generateAuthToken<VerifyEmailTokenPayload>(
      payload,
      '7days',
      'AUTH_TOKEN_SECRET'
    );
    return await resendSendEmailSignUpVerificationEmail(token, email);
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
    throw error;
  }
};
