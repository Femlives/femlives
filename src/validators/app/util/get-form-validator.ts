import { z } from 'zod';
import * as api from '@/validators/api';
import * as app from '@/validators/app';

export enum ValidatorName {
  EMAIL_ADDRESS = 'emailAddress',
  VIDEO_URL = 'videoUrl',
}

export const getFormValidator = (key: ValidatorName) => {
  const map: Record<ValidatorName, z.ZodTypeAny> = {
    [ValidatorName.EMAIL_ADDRESS]: api.zEmailAddressDto,
    [ValidatorName.VIDEO_URL]: app.videoUrlSchema,
  };
  if (!map[key]) {
    throw new Error(`validator ${key} not found`);
  }

  return map[key];
};
