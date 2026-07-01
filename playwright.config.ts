import { defineConfig, devices } from '@playwright/test';

/**
 * Playwright configuration for the TypeScript 7 exercise.
 * Target: the public TodoMVC demo app that Playwright provides for practice.
 * Remember: Playwright does NOT type-check specs when it runs them —
 * that is done separately by the type-check gate (the "pretest" script and CI).
 */
export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    baseURL: 'https://demo.playwright.dev/todomvc',
    trace: 'on-first-retry',
  },
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
  ],
});
