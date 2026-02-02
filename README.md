AI-Assisted QA Automation Framework for SaaS Web Apps
Overview

This project demonstrates a modern QA automation framework for testing a SaaS-style web application using Playwright and TypeScript.
It includes:
UI + API automation
Visual regression testing
Schema validation
GitHub Actions CI/CD
AI-based test failure analysis

Architecture
tests/
  ui/        → UI automation
  api/       → API tests
  visual/    → visual regression
pages/       → Page Objects
core/        → config & helpers
ai/          → LLM-powered failure analyzer
.github/     → CI pipelines

Tech Stack
Playwright + TypeScript
Node.js
GitHub Actions
Allure Reports
AJV Schema Validation
Pixelmatch (visual diff)
LLM API for failure analysis

How to Run Locally
npm install
npx playwright test
npm run allure:open

Smoke only:
npx playwright test -g "@smoke"

AI Failure Analyzer
When tests fail, the AI module:
reads failure logs
sends to LLM
generates:
root cause summary
flaky test guess
recommended fix

Output:
ai-summary.json

CI/CD Pipeline
Smoke tests on PR
Full regression nightly
Allure reports uploaded
AI summaries generated on failure

Sample Reports
Allure Report
![Capture](https://github.com/user-attachments/assets/b84baf72-71c7-4433-8865-98128af09f45)

Playwright Trace Viewer
![Capture 1](https://github.com/user-attachments/assets/3d5f0bf7-fce0-494e-9a06-d235ed74d0c3)

CI Pipeline Setup
![Capture 2](https://github.com/user-attachments/assets/bbf32dcd-9c63-490a-b34d-3f23e257172d)
