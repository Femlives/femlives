import { DbTable } from '@/enums';
import { defineSchema, defineTable } from 'convex/server';
import { emailAddressesTable, usersTable } from './tables';

export default defineSchema({
  [DbTable.EMAIL_ADDRESSES]: emailAddressesTable,
  [DbTable.USERS]: usersTable,
  test: defineTable({}),
});
