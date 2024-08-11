import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("file:///home/fede/dev-repos/templates/form-js/index.html");
  //await page.getByTestId("name").click();
  await page.getByPlaceholder("Name").fill("fede");
  // await page.getByPlaceholder("Password").click();
  await page.getByPlaceholder("Password").fill("fede");
  //await page.getByRole("button", { name: "Send" }).click();
  await page.getByText("Send").click();
  await page.waitForTimeout(1000);

  await expect(page.getByText("An error")).toBeVisible();
});
