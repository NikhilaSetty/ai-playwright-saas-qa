import axios from 'axios';
import fs from 'fs';
import path from 'path';
import { env } from '../core/env';

type FailureInput = {
  testName: string;
  error: string;
  tracePath?: string;
};

async function analyzeFailure(input: FailureInput) {
  const prompt = `
You are a senior QA automation engineer.

Analyze this Playwright test failure and respond in JSON with:
{
  "summary": "...",
  "probableCause": "...",
  "isFlaky": true|false,
  "recommendedAction": "..."
}

TEST NAME:
${input.testName}

ERROR LOG:
${input.error}

TRACE FILE:
${input.tracePath || 'none'}
`;

  const response = await axios.post(
    'https://api.openai.com/v1/chat/completions',
    {
      model: 'gpt-4.1-mini',
      messages: [{ role: 'user', content: prompt }],
      temperature: 0.2
    },
    {
      headers: {
        Authorization: `Bearer ${env.aiKey}`,
        'Content-Type': 'application/json'
      }
    }
  );

  return response.data.choices[0].message.content;
}

async function run() {
  const failureFile = process.argv[2];

  if (!failureFile) {
    console.error('❌ Provide path to failure log file');
    process.exit(1);
  }

  const raw = fs.readFileSync(failureFile, 'utf-8');

  const result = await analyzeFailure({
    testName: path.basename(failureFile),
    error: raw
  });

  const outputPath = 'ai-summary.json';

  fs.writeFileSync(outputPath, result);

  console.log('🤖 AI Failure Analysis saved to', outputPath);
}

run().catch(err => {
  console.error('AI analyzer failed:', err.message);
  process.exit(1);
});