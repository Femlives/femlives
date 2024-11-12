import 'server-only';
import { EmailVerificationState, HttpStatusCode } from '@/enums';
import { SignUpFormData } from '@/types/actions';
import { encryptPassword } from '@/util/encryption';
import { convexDb, users } from '../convexDb';

export const dbCreateUser = async (
  data: SignUpFormData
): Promise<{ status: HttpStatusCode; id?: string; message?: string }> => {
  const { email, password, userName } = data;

  const passwordHash = await encryptPassword(password);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const signUpFormData = {
    userName,
    email,
    passwordHash,
    emailVerified: EmailVerificationState.NOT_VERIFIED,
  };

  try {
    const { id } = await convexDb.mutation(users.createUser, signUpFormData);

    return {
      status: HttpStatusCode.CREATED,
      id,
    };
  } catch (error) {
    console.error('Error creating user:', error);
    return {
      status: HttpStatusCode.INTERNAL_SERVER_ERROR,
      message: 'Failed to create user',
    };
  }
  //return { status: HttpStatusCode.OK };
  //return await convexDb.mutation(users.createUser, signUpFormData);
};
