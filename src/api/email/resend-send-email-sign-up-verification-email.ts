'server-only';

import { EmailConfig, EmailResponse } from '@/types/api/email';
import { sendEmail } from './send-email';
import { EmailSender } from '@/enums';
import EmailSignUpVerificationTemplate from '@/components/emails/templates/email-sign-up-verification';

export const resendSendEmailSignUpVerificationEmail = async (
  userEmail: string
): Promise<EmailResponse> => {
  return await sendEmail(getEmailConfig(userEmail));
};

const getEmailConfig = (email: string): EmailConfig => {
  return {
    from: EmailSender.INFO,
    to: email,
    subject: 'Femlives - thanks for signing up!',
    template: EmailSignUpVerificationTemplate({}),
  };
};
