import 'server-only';
import { EmailVerificationState, HttpStatusCode } from '@/enums';
import { SignUpFormData } from '@/types/actions';
import { encryptPassword } from '@/util/encryption';

export const dbCreateUser = async (
  data: SignUpFormData
): Promise<{ status: HttpStatusCode }> => {
  const { email, password, userName } = data;

  const passwordHash = await encryptPassword(password);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const signUpFormData = {
    userName,
    email,
    passwordHash,
    emailVerified: EmailVerificationState.NOT_VERIFIED,
  };

  return { status: HttpStatusCode.OK };
  // todo https://github.com/Femlives/femlives/issues/38
  // return await convexDb.mutation(users.createUser, signUpFormData);
};
