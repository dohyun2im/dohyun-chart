import { Page, expect, test } from "@playwright/test";

test.describe("flow page", () => {
  let page: Page;

  test.beforeAll(async ({ browser, contextOptions }) => {
    const browserContext = await browser.newContext(contextOptions);
    page = await browserContext.newPage();

    await page.goto("http://localhost:3000/flow");
  });

  test("flow라는 글자가 존재합니다.", async () => {
    await expect(page.getByText("flow")).toBeVisible();
  });

  test("dashboard 버튼을 누르면 페이지를 이동합니다.", async () => {
    await page.getByRole("button", { name: "Flow" }).click();
    await expect(page).toHaveURL("http://localhost:3000/dashboard");
  });
});
