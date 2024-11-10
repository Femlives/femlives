import 'server-only';
import { EmailVerificationState, HttpStatusCode } from '@/enums';
import { SignUpFormData } from '@/types/actions';
import { encryptPassword } from '@/util/encryption';
import { convexDb, users } from '../convexDb';

export const dbCreateUser = async (
  data: SignUpFormData
): Promise<{ status: HttpStatusCode }> => {
  const { email, password, userName } = data;

  const passwordHash = await encryptPassword(password);

  const signUpFormData = {
    userName,
    email,
    passwordHash,
    emailVerified: EmailVerificationState.VERIFIED,
  };

  return await convexDb.mutation(users.createUser, signUpFormData);
};
