'server-only';

import { convexDb, emailAddresses } from '@/api/db/convexDb';
import { EmailAddressDto } from '@/types/api/db';

export const createEmailAddress = async (
  data: EmailAddressDto
): Promise<void> => {
  await convexDb.mutation(emailAddresses.createEmailAddress, data);
};
