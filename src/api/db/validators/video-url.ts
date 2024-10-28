import { z } from 'zod';

export const videoUrlSchema = z.object({
  videoUrl: z.string().url('Please enter a valid URL'),
});
