import 'server-only';

import { convexDb, users, Id } from '../convexDb';
import { mapToAppDto } from '../util';
import { AppUserData, DbUserData, UserDto } from '@/types/api/db';
import { DbTable, EmailVerificationState } from '@/enums';

export const dbGetUserByEmail = async (
  email: AppUserData['email']
): Promise<string | null> => {
  // const res = await convexDb.query(users.getUserByEmail, {
  //   email,
  // });

  const resHttp = await fetch(
    `https://grateful-kangaroo-910.convex.site/test`,
    {
      credentials: typeof window !== 'undefined' ? 'include' : undefined,
    }
  );

  const res = await resHttp.text();
  console.log('Response:', res, email);
  return res;
  // return res ? mapUserDto(res) : null;
};

export const dbGetUserById = async (
  userId: AppUserData['id']
): Promise<AppUserData | null> => {
  const res = await convexDb.query(users.getUserById, {
    userId: userId as Id<DbTable.USERS>,
  });
  return res ? mapUserDto(res) : null;
};

const mapUserDto = (res: DbUserData): AppUserData => {
  const appData = mapToAppDto<UserDto>(res);
  return {
    ...appData,
    emailVerified: res.emailVerified as EmailVerificationState,
  };
};
