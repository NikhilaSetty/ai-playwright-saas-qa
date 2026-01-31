import { test, expect } from '@playwright/test';
import { createApiContext } from '../core/apiClient';


test.describe('Auth API', () => {

  test('@smoke Login API returns token', async () => {
    const api = await createApiContext();

    const response = await api.post('/auth/login', {
      data: {
        email: 'admin@test.com',
        password: 'Password@123'
      }
    });

    const status = response.status();
    const bodyText = await response.text();

    console.log('STATUS:', status);
    console.log('BODY:', bodyText);

    expect(status).toBe(200);

    const body = JSON.parse(bodyText);
    expect(body.token).toBeDefined();
  });

});
