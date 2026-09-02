import { expect, test } from "@playwright/test"

test("landing page has title", async ({ page }) => {
  await page.goto("/")
  await expect(page.getByText("Bangun landing page")).toBeVisible()
})
