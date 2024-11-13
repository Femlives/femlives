import 'server-only';
import { DbTable, EmailVerificationState, HttpStatusCode } from '@/enums';
import { SignUpFormData } from '@/types/actions';
import { encryptPassword, verifyPassword } from '@/util/encryption';
import { convexDb, Id, users } from '../convexDb';

export const dbCreateUser = async (
  data: SignUpFormData
): Promise<{
  status: HttpStatusCode;
  id: Id<DbTable.USERS>;
}> => {
  const { email, password, userName } = data;
  console.log('>>>>>>>>> | password:', password);

  const passwordHash = await encryptPassword(password);
  console.log('>>>>>>>>> | passwordHash:', passwordHash);

  const isPasswordVerified = await verifyPassword(
    'simonsch.tz@gmail.cm',
    passwordHash
  );
  console.log('>>>>>>>>> | isPasswordVerified:', isPasswordVerified);

  const signUpFormData = {
    userName,
    email,
    passwordHash,
    emailVerified: EmailVerificationState.NOT_VERIFIED,
  };

  return await convexDb.mutation(users.createUser, signUpFormData);
};
