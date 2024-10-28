import {
  zAppEmailAddressData,
  zDbEmailAddressData,
  zEmailAddressDto,
} from '@/validators/api';
import { z } from 'zod';

/**
 * should only be used in api
 */
export type EmailAddressDto = z.infer<typeof zEmailAddressDto>;

/**
 * should only be used in app
 */
export type AppEmailAddressData = z.infer<typeof zAppEmailAddressData>;

/**
 * should only be used in db
 */
export type DbEmailAddressData = z.infer<typeof zDbEmailAddressData>;
