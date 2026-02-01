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

Smoke only
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
![Capture](https://github.com/user-attachments/assets/26b1102a-60e1-4994-adfb-56b9a7269f71)

Playwright Trace Viewer
![Capture 1](https://github.com/user-attachments/assets/c18aea23-11de-4256-8fd1-ab5c295d9fcf)

CI Pipeline with Smoke, Regression and AI Analysis
![Capture 2](https://github.com/user-attachments/assets/5cf4af1f-e51b-4301-ae04-ff26fa642719)

Final Commit
git add README.md
git commit -m "Add professional README and CI/CD documentation"
git push
