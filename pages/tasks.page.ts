import { Page, Locator, expect } from '@playwright/test';

export class TasksPage {
  readonly page: Page;
  readonly newTodo: Locator;
  readonly todoItems: Locator;

  constructor(page: Page) {
    this.page = page;
    this.newTodo = page.locator('.new-todo');
    this.todoItems = page.locator('.todo-list li');
  }

  async goto() {
    await this.page.goto('https://demo.playwright.dev/todomvc',{ waitUntil:'domcontentloaded' });
    await expect(this.newTodo).toBeVisible();
  }

  async addTask(task: string) {
    await this.newTodo.fill(task);
    await this.newTodo.press('Enter');
  }

  async getTaskCount() {
    return await this.todoItems.count();
  }

  async expectTaskVisible(task: string) {
    await expect(this.page.locator(`text=${task}`)).toBeVisible();
  }

  async deleteFirstTask() {
    const first = this.todoItems.first();
    await first.hover();
    await first.locator('.destroy').click();
  }
}
