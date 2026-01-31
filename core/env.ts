import * as dotenv from 'dotenv';

dotenv.config();

export const env = {
  baseUrl: process.env.BASE_URL || '',
  apiUrl: process.env.API_URL || '',
  aiKey: process.env.AI_API_KEY || ''
};
