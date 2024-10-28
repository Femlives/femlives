import { z } from 'zod';

/**
 * just for prototyping
 */
export const videoUrlSchema = z.object({
  videoUrl: z.string().url('Please enter a valid URL'),
});
