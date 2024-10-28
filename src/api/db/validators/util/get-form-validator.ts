import { z } from 'zod';
import { zEmailAddressDto } from '../email-address';

export enum ValidatorName {
  EMAIL_ADDRESS = 'emailAddress',
  VIDEO_URL = 'videoUrl',
}

export const videoUrlSchema = z.object({
  videoUrl: z.string().url('Please enter a valid URL'),
});

export const getFormValidator = (key: ValidatorName) => {
  const map: Record<ValidatorName, z.ZodTypeAny> = {
    [ValidatorName.EMAIL_ADDRESS]: zEmailAddressDto,
    [ValidatorName.VIDEO_URL]: z.object({
      videoUrl: z.string().url('Please enter a valid URL'),
    }),
  };
  if (!map[key]) {
    throw new Error(`validator ${key} not found`);
  }

  return map[key];
};
