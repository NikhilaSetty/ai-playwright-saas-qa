import { test, expect } from '@playwright/test';
import { TasksPage } from '../pages/tasks.page';

test.describe('Tasks UI flows', () => {

  test('@smoke Add task', async ({ page }) => {
    const tasks = new TasksPage(page);

    await tasks.goto();
    await tasks.addTask('Write Playwright tests');

    await tasks.expectTaskVisible('Write Playwright tests');
  });

  test('@regression Add multiple tasks', async ({ page }) => {
    const tasks = new TasksPage(page);

    await tasks.goto();
    await tasks.addTask('Task 1');
    await tasks.addTask('Task 2');

    expect(await tasks.getTaskCount()).toBeGreaterThan(1);
  });

});
