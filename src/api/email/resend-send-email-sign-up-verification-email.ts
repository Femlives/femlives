import { EmailConfig, EmailResponse } from '@/types/api/email';
import { sendEmail } from './send-email';
import { EmailSender } from '@/enums';
import EmailSignUpVerificationTemplate from '@/components/emails/templates/email-sign-up-verification';

export const resendSendEmailSignUpVerificationEmail = async (
  token: string,
  userEmail: string
): Promise<EmailResponse> => {
  const config = getEmailConfig(token, userEmail);
  return await sendEmail(config);
};

const getEmailConfig = (email: string, token: string): EmailConfig => {
  return {
    from: EmailSender.INFO,
    to: email,
    subject: 'Femlives - thanks for signing up!',
    template: EmailSignUpVerificationTemplate({ token }),
  };
};
