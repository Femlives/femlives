import { z } from 'zod';
import * as api from '@/validators/api';
import * as app from '@/validators/app';
import * as formVal from '@/validators/form-data-validator';
export const testValidatorZObject = z.object({
  name: z.string(),
  age: z.coerce.number(),
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
    [ValidatorName.SIGN_UP]: formVal.signUpValidator,
  };
  if (!map[key]) {
    throw new Error(`validator ${key} not found`);
  }

  return map[key];
};
