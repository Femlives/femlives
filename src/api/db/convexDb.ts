'server only';

import { parsedEnv } from '@/util/helper';
import { ConvexHttpClient } from 'convex/browser';
import { api } from '../../../convex/_generated/api';
import { Id } from '../../../convex/_generated/dataModel';

export const convexDb = new ConvexHttpClient(parsedEnv.NEXT_PUBLIC_CONVEX_URL!);
export const users = api.users.index;
export const emailAddresses = api.api.email_addresses.index;

export type { Id };
