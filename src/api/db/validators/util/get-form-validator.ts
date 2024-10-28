import { z } from 'zod';
import { zEmailAddressDto } from '../email-address';
import { videoUrlSchema } from '../video-url';

export enum ValidatorName {
  EMAIL_ADDRESS = 'emailAddress',
  VIDEO_URL = 'videoUrl',
}

export const getFormValidator = (key: ValidatorName) => {
  const map: Record<ValidatorName, z.ZodTypeAny> = {
    [ValidatorName.EMAIL_ADDRESS]: zEmailAddressDto,
    [ValidatorName.VIDEO_URL]: videoUrlSchema,
  };
  if (!map[key]) {
    throw new Error(`validator ${key} not found`);
  }

  return map[key];
};
