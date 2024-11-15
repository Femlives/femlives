import { verificationEmailValidator } from '@/validators/form-data-validator';
import { z } from 'zod';

export type VerificationEmailFormData = z.infer<
  typeof verificationEmailValidator
>;
