import { test, expect } from '@playwright/test';
import { createApiContext } from '../core/apiClient';
import schema from '../core/schemas/user.schema.json';
import { validateSchema } from '../core/schemaValidator';

test.describe('Users API', () => {

  test('@regression Create user', async () => {
    const api = await createApiContext();

    const res = await api.post('/users', {
      data: { name: 'nikhila', job: 'qa' }
    });

    expect(res.status()).toBe(201);

    const body = await res.json();
    expect(body.name).toBe('nikhila');
  });

  test('@regression Get users', async () => {
    const api = await createApiContext();

    const res = await api.get('/users');

    console.log('STATUS:', res.status());
    console.log('BODY:', await res.text());

    expect(res.status()).toBe(200);
  });

});
