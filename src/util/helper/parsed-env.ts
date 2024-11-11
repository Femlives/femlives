import { z } from 'zod';

const envValidator = z.object({
  CONVEX_DEPLOYMENT: z.string().optional(),
  NEXT_PUBLIC_CONVEX_URL: z.string().optional(),
  RESEND_API_KEY: z.string().optional(),
  TOKEN_AUTH_SECRET: z.string().optional(),
});

//eslint-disable-next-line no-process-env
export const parsedEnv = envValidator.parse(process.env);
