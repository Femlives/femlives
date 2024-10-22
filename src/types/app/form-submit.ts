import { HttpStatusCode, Route } from '@/enums';

export type FormSubmitResponse = {
  status: HttpStatusCode;
  success: boolean;
  error?: Record<string, string>;
  redirectRoute?: Route;
};
