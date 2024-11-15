import { httpRouter } from 'convex/server';
import { httpAction } from './_generated/server';

const test = httpAction(async (ctx, request) => {
  return new Response('Mic Check');
});

const http = httpRouter();

http.route({
  path: '/test',
  method: 'GET',
  handler: test,
});

export default http;
