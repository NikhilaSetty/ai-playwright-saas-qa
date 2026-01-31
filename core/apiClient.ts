import { request, APIRequestContext } from '@playwright/test';
import { env } from './env';

export async function createApiContext(): Promise<APIRequestContext> {
  return await request.newContext({
    baseURL: env.apiUrl,
    extraHTTPHeaders: {
      'Content-Type': 'application/json'
    }
  });
}
