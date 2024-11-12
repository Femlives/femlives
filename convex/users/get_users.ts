import { DbTable } from '@/enums';
import { zQuery, zInternalQuery } from '../helper';
import { zid } from 'convex-helpers/server/zod';
import { getOneFrom } from 'convex-helpers/server/relationships';
import { zDbUserData } from '@/api/db/validators';

export const getUserByEmail = zQuery({
  args: { email: zDbUserData.shape.email },
  output: zDbUserData.nullable(),
  handler: async (ctx, args) => {
    return await getUserByEmailIntern(ctx, { email: args.email });
  },
});

export const getUserByEmailIntern = zInternalQuery({
  args: { email: zDbUserData.shape.email },
  output: zDbUserData.nullable(),
  handler: async (ctx, args) => {
    return await getOneFrom(
      ctx.db,
      DbTable.USERS,
      'by_email',
      args.email,
      'email'
    );
  },
});

export const getUserById = zQuery({
  args: { userId: zid(DbTable.USERS) },
  output: zDbUserData.nullable(),
  handler: async (ctx, args) => {
    return getUserByIdIntern(ctx, { userId: args.userId });
  },
});

export const getUserByIdIntern = zInternalQuery({
  args: { userId: zid(DbTable.USERS) },
  output: zDbUserData.nullable(),
  handler: async (ctx, args) => {
    return await ctx.db.get(args.userId);
  },
});
