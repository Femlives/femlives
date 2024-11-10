import { z } from 'zod';
import * as api from '@/validators/api';
import * as app from '@/validators/app';
export const testValidatorZObject = z.object({
  name: z.string(),
  age: z.coerce.number(),
});

const signUpValidatorZodSchema = z
  .object({
    userName: z.string().min(3, 'User name must be at least 3 characters long'),
    email: z.string().email('Invalid email format'),
    password: z.string().min(8, 'Password must be at least 8 characters long'),
    confirmPassword: z.string().min(8),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  });

export const testValidatorZEffects = z
  .object({
    name: z.string(),
    age: z.coerce.number(),
    optionalField: z.number().optional(),
  })
  .refine((val) => val);

export enum ValidatorName {
  EMAIL_ADDRESS = 'emailAddress',
  SIGN_UP = 'signUp',
  TEST_Z_EFFECTS = 'testZEffects',
  TEST_Z_OBJECT = 'testZObject',
  VIDEO_URL = 'videoUrl',
}

export const getFormDataValidator = (key: ValidatorName) => {
  const map: Record<ValidatorName, z.ZodTypeAny> = {
    [ValidatorName.TEST_Z_OBJECT]: testValidatorZObject,
    [ValidatorName.TEST_Z_EFFECTS]: testValidatorZEffects,
    [ValidatorName.EMAIL_ADDRESS]: api.zEmailAddressDto,
    [ValidatorName.VIDEO_URL]: app.videoUrlSchema,
    [ValidatorName.SIGN_UP]: signUpValidatorZodSchema,
  };
  if (!map[key]) {
    throw new Error(`validator ${key} not found`);
  }

  return map[key];
};
