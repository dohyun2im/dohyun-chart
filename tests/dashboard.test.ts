import { Page, expect, test } from "@playwright/test";

test.describe("dashboard page", () => {
  let page: Page;

  test.beforeAll(async ({ browser, contextOptions }) => {
    const browserContext = await browser.newContext(contextOptions);
    page = await browserContext.newPage();

    await page.goto("http://localhost:3000/dashboard");
  });

  test("'비트코인'이라는 글자가 존재합니다.", async () => {
    await expect(page.getByText("비트코인")).toBeVisible();
  });
});
