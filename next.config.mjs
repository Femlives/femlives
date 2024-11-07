import { setupDevPlatform } from '@cloudflare/next-on-pages/next-dev';

/** @type {import('next').NextConfig} */
const nextConfig = {};

// eslint-disable-next-line no-process-env, no-undef
if (process.env.NODE_ENV === 'development') {
  await setupDevPlatform();
}
export default nextConfig;
