import { test, expect } from "@playwright/test";

test("The 404 page redirects the user to home after 5 seconds.", async ({ page }) => {
    await page.goto("/random-page");

    await expect(page.locator("text=404 - Page not found")).toBeVisible();

    await expect(page.locator("text=Redirecting in 5 seconds...")).toBeVisible();

    await page.waitForURL("/");
    await expect(page).toHaveURL("/");
});