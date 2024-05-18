import { Page, expect, test } from "@playwright/test";

test.describe("flow page", () => {
  let page: Page;

  test.beforeAll(async ({ browser, contextOptions }) => {
    const browserContext = await browser.newContext(contextOptions);
    page = await browserContext.newPage();

    await page.goto("http://localhost:3000/flow");
  });

  test("flow-page라는 글자가 존재합니다.", async () => {
    await expect(page.getByText("flow-page")).toBeVisible();
  });
});
