import { Route } from '@/enums';
import { redirectTo } from '@/util/app';
import { parsedEnv } from '@/util/helper';
import { NextRequest, NextResponse } from 'next/server';

export const prodProtection = async (
  req: NextRequest
): Promise<NextResponse<unknown>> => {
  const requestedRoute = req.nextUrl.pathname as Route;

  if (parsedEnv.VERCEL_ENV === 'production' && requestedRoute !== Route.HOME) {
    return redirectTo(req, Route.HOME);
  }

  return NextResponse.next();
};
