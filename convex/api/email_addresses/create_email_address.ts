import { zEmailAddressDto } from '@/api/db/validators';
import { zInternalMutation, zMutation } from '../../helper';
import { DbTable } from '@/enums';
import { z } from 'zod';
import { getEmailAddressByEmail } from './get_email_address';
import { ConvexError } from 'convex/values';
import { zid } from 'convex-helpers/server/zod';

const createEmailArgs = zEmailAddressDto.shape;

export const createEmailAddress = zMutation({
  args: zEmailAddressDto.shape,
  output: zid(DbTable.EMAIL_ADDRESSES),
  handler: async (ctx, args) => {
    if (await emailAlreadyInUse(ctx, args)) {
      throw new ConvexError('Email must be unique');
    }
    return await ctx.db.insert(DbTable.EMAIL_ADDRESSES, args);
  },
});

const emailAlreadyInUse = zInternalMutation({
  args: createEmailArgs,
  output: z.boolean(),
  handler: async (ctx, args) => {
    const existing = await getEmailAddressByEmail(ctx, args);
    return !!existing;
  },
});
