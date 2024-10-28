import { z } from 'zod';
import { zMapDbToAppData } from './util/z-map-db-to-app-data';
import { zMapAppToDbData } from './util/z-map-app-to-db-data';

export const zEmailAddressDto = z.object({ email: z.string().min(1) });

export const zAppEmailAddressData = zMapDbToAppData(zEmailAddressDto);

export const zDbEmailAddressData = zMapAppToDbData(zEmailAddressDto);
