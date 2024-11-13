'use server';

import { TokenPayload } from '@/types/app';
import { assertIsString } from '@/util/asserts';
import { parsedEnv } from '@/util/helper';
import { jwtVerify } from 'jose';
import { JOSEError } from 'jose/errors';

export const readToken = async <T extends TokenPayload>(
  token: string
): Promise<T & { expiresAt: Date }> => {
  try {
    const authSecret = parsedEnv.AUTH_TOKEN_SECRET;
    assertIsString(authSecret);

    const secret = new TextEncoder().encode(authSecret);

    const { payload } = await jwtVerify(token, secret);

    const expiresAt = new Date(payload.exp! * 1000);

    return { ...(payload as T), expiresAt };
  } catch (error) {
    if (error instanceof JOSEError) {
      const isExpired = error.code === 'ERR_JWT_EXPIRED';
      if (isExpired) {
        throw new Error('Token expired');
      }
    }
    throw error;
  }
};
