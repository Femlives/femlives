// based on this article: https://lucia-auth.com/sessions/cookies/nextjs

import { generateAuthToken, readToken } from '@/actions/token';
import { CookieName, HttpStatusCode } from '@/enums';
import { getCookieConfig, getDateFromNowInDuration } from '@/util/helper';
import { NextResponse } from 'next/server';

import type { NextRequest } from 'next/server';

export const csrfProtection = async (
  req: NextRequest
): Promise<NextResponse<unknown>> => {
  if (req.method !== 'GET') {
    if (!(await verifySignature(req))) {
      return getErrorRes();
    }

    const originHeader = req.headers.get('Origin');
    const hostHeader =
      req.headers.get('host') ?? req.headers.get('x-forwarded-host');

    if (originHeader === null || hostHeader === null) {
      return getErrorRes();
    }

    let origin: URL;
    try {
      origin = new URL(originHeader);
    } catch {
      return getErrorRes();
    }

    if (origin.host !== hostHeader) {
      return getErrorRes();
    }
  }

  const setSignatureRes = await setSessionSignature(req);

  return setSignatureRes ?? NextResponse.next();
};

const getErrorRes = () => {
  return new NextResponse(null, {
    status: HttpStatusCode.FORBIDDEN,
  });
};

const setSessionSignature = async (
  req: NextRequest
): Promise<NextResponse<unknown> | void> => {
  const signatureToken = req.cookies.get(CookieName.SESSION_SIGNATURE);

  if (!signatureToken) {
    const token = await generateAuthToken(
      {},
      getDateFromNowInDuration({ hours: 8 }),
      'SESSION_SIGNATURE_SECRET'
    );

    const res = NextResponse.redirect(req.url);
    res.cookies.set(CookieName.SESSION_SIGNATURE, token, getCookieConfig(null));
    return res;
  }
};

const verifySignature = async (req: NextRequest): Promise<boolean> => {
  const signatureToken = req.cookies.get(CookieName.SESSION_SIGNATURE);
  if (!signatureToken) {
    return false;
  }

  try {
    await readToken(signatureToken.value, 'SESSION_SIGNATURE_SECRET');
  } catch {
    return false;
  }

  return true;
};