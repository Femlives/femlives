import { isString } from '@/util/type-guards';

export const assertIsString: (value: unknown) => asserts value is string = (
  value
) => {
  if (!isString(value)) {
    throw new Error('Value is not a string');
  }
};
