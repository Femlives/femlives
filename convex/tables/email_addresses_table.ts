import { zEmailAddressDto } from '@/validators/api';
import { zodToConvex } from 'convex-helpers/server/zod';
import { defineTable } from 'convex/server';

export const emailAddressesTable = defineTable(
  zodToConvex(zEmailAddressDto)
).index('by_email', ['email']);
