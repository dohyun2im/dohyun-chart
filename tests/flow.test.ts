import { Page, expect, test } from "@playwright/test";

test.describe("flow page", () => {
  let page: Page;

  test.beforeAll(async ({ browser, contextOptions }) => {
    const browserContext = await browser.newContext(contextOptions);
    page = await browserContext.newPage();

    await page.goto("http://localhost:3000/flow");
  });

  test("Sankey Diagram의 Node와 Link가 정상적으로 렌더링됩니다.", async () => {
    await page.route("/api/flow", (route) => {
      route.fulfill({
        status: 200,
        contentType: "application/json",
        body: JSON.stringify({
          nodes: [
            { name: "test node1", category: "Node" },
            { name: "test node2", category: "Node" }
          ],
          links: [{ source: "test node1", target: "test node2", value: 100 }]
        })
      });
    });
    await expect(page.getByText("test node1")).toBeVisible();
    await expect(page.getByText("test node2")).toBeVisible();
  });
});
