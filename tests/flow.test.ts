import { Page, expect, test } from "@playwright/test";

test.describe("flow page", () => {
  let page: Page;

  test.beforeAll(async ({ browser, contextOptions }) => {
    const browserContext = await browser.newContext(contextOptions);
    page = await browserContext.newPage();

    await page.goto("http://localhost:3000/flow");
    await page.route("/api/flow", (route) => {
      route.continue();
    });
  });

  test("API pending 상태 일 경우 Sankey Diagram는 스켈레톤 UI가 보인 이후 렌더링됩니다.", async () => {
    await expect(page.locator(".sankey-diagram-skeleton")).toBeVisible();

    await page.route("/api/flow", (route) => {
      route.fulfill({
        status: 200,
        contentType: "application/json",
        body: JSON.stringify({ nodes: [{ name: "", category: "" }], links: [] })
      });
    });

    await expect(page.locator(".sankey-diagram-skeleton")).not.toBeVisible();
  });
});
