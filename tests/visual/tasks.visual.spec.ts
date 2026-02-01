import { test, expect } from '@playwright/test';
import { TasksPage } from '../../pages/tasks.page';

test('@visual Tasks page snapshot', async ({ page }) => {
  const tasks = new TasksPage(page);

  await tasks.goto();
  await tasks.addTask('Visual Test Task');

  expect(await page.screenshot()).toMatchSnapshot('tasks-page.png');
});