import { Id } from '@/api/db/convexDb';
import { DbTable } from '@/enums';

export type DbData<T> = T & {
  _id: Id<DbTable>;
  _creationTime: number;
};
