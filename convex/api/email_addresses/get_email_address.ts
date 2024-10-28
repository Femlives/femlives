import { zDbEmailAddressData } from '@/validators/api';
import { zQuery } from '../../helper';
import { DbTable } from '@/enums';
import { zid } from 'convex-helpers/server/zod';
import { getOneFrom } from 'convex-helpers/server/relationships';

export const getEmailAddressById = zQuery({
  args: { id: zid(DbTable.EMAIL_ADDRESSES) },
  output: zDbEmailAddressData.nullable(),
  handler: async (ctx, args) => {
    return await ctx.db.get(args.id);
  },
});

export const getEmailAddressByEmail = zQuery({
  args: { email: zDbEmailAddressData.shape.email },
  output: zDbEmailAddressData.nullable(),
  handler: async (ctx, args) => {
    return await getOneFrom(
      ctx.db,
      DbTable.EMAIL_ADDRESSES,
      'by_email',
      args.email,
      'email'
    );
  },
});
