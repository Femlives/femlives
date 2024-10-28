import { HttpStatusCode, Route } from '@/enums';

export type ServerActionResponse = {
  status: HttpStatusCode;
  error?: Record<string, string>;
  redirectRoute?: Route;
};
