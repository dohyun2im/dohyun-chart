import { Page, expect, test } from "@playwright/test";

test.describe("dashboard page", () => {
  let page: Page;

  test.beforeAll(async ({ browser, contextOptions }) => {
    const browserContext = await browser.newContext(contextOptions);
    page = await browserContext.newPage();

    await page.goto("http://localhost:3000/dashboard");
  });

  test("'Bitcoin'이라는 글자가 존재합니다.", async () => {
    await expect(page.getByText("Bitcoin")).toBeVisible();
  });

  test("API pending 상태 일 경우 차트는 스켈레톤 UI가 보인 이후 렌더링됩니다.", async () => {
    await page.route("https://api.upbit.com/v1/candles/days?market=KRW-BTC&count=30", (route) => {
      route.continue();
    });

    await expect(page.locator(".candle-stick-chart-skeleton")).toBeVisible();

    await page.route("https://api.upbit.com/v1/candles/days?market=KRW-BTC&count=30", (route) => {
      route.fulfill({
        status: 200,
        contentType: "application/json",
        body: JSON.stringify([])
      });
    });

    await expect(page.locator(".candle-stick-chart-skeleton")).not.toBeVisible();
  });

  test("'SQL Editor'라는 글자가 존재하며 Editor 창을 누르면 활성화됩니다.", async () => {
    await expect(page.getByText("SQL Editor")).toBeVisible();
    await page.locator("div.view-lines").click();
    await expect(await page.locator("textarea.monaco-mouse-cursor-text")).toBeFocused();
  });

  test("Run 버튼을 누르면 에디터에 로딩 아이콘이 생깁니다.", async () => {
    await page.getByRole("button", { name: "RUN" }).click();
    await expect(page.locator('svg[data-testid="LoopIcon"]')).toBeVisible();
  });
});
