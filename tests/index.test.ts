import { Page, expect, test } from "@playwright/test";

test.describe("initial page", () => {
  let page: Page;

  test.beforeAll(async ({ browser, contextOptions }) => {
    const browserContext = await browser.newContext(contextOptions);
    page = await browserContext.newPage();

    await page.goto("http://localhost:3000");
  });

  test("true is truthy", async () => {
    await expect(true).toBeTruthy();
  });
});
