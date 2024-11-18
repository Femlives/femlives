'server-only';

import { generateToken } from '../../token';
import { resendSendEmailSignUpVerificationEmail } from '@/api/email';
import { ServerActionResponse, VerifyEmailTokenPayload } from '@/types/app';
import { HttpStatusCode } from '@/enums';
import { getUserByEmail } from '@/actions/user/get-user';

export const sendEmailVerificationEmail = async (
  userEmail: string
): Promise<ServerActionResponse> => {
  const user = await getUserByEmail(userEmail);

  if (!user) {
    return {
      status: HttpStatusCode.NOT_FOUND,
      error: { message: 'User not found' },
    };
  }

  const { email } = user;

  const payload = {
    email,
  } satisfies VerifyEmailTokenPayload;

  const emailVerificationToken = await generateToken<VerifyEmailTokenPayload>(
    payload,
    'AUTH_TOKEN_SECRET'
  );

  const res = await resendSendEmailSignUpVerificationEmail(
    emailVerificationToken,
    userEmail
  );

  if (!res.success) {
    return {
      status: HttpStatusCode.BAD_REQUEST,
      message: `Failed to send email verification email: ${res.error}`,
    };
  }

  return {
    status: HttpStatusCode.OK,
  };
};
