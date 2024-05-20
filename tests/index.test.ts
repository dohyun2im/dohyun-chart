import { Page, expect, test } from "@playwright/test";

test.describe("index page", () => {
  let page: Page;

  test.beforeAll(async ({ browser, contextOptions }) => {
    const browserContext = await browser.newContext(contextOptions);
    page = await browserContext.newPage();
    await page.goto("http://localhost:3000");
  });

  test("초기 페이지는 dashboard이며 flow버튼을 클릭하면 /flow로 이동하고 dashboard버튼을 클릭하면 /dashboard로 이동합니다.", async () => {
    await expect(page).toHaveURL("http://localhost:3000/dashboard");
    await page.locator('a[href="/flow"]').click();
    await expect(page).toHaveURL("http://localhost:3000/flow");
    await page.locator('a[href="/dashboard"]').click();
    await expect(page).toHaveURL("http://localhost:3000/dashboard");
  });
});
