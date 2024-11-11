'server-only';

import { parsedEnv } from '@/util/helper';
import { ConvexHttpClient } from 'convex/browser';
import { api } from '../../../convex/_generated/api';

export const convexDb = new ConvexHttpClient(parsedEnv.NEXT_PUBLIC_CONVEX_URL!);
// todo https://github.com/Femlives/femlives/issues/38
// export const users = api.users.index;
export const emailAddresses = api.api.email_addresses.index;
