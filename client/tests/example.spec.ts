import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
	await page.goto("http://127.0.0.1:3000");

	// Expect a title "to contain" a substring.
	await expect(page).toHaveTitle(/2¢ents/);
});

test("has subtitle", async ({ page }) => {
	await page.goto("/");
	await expect(page).toHaveTitle(/Share your thoughts/);

	// Click the get started link.
	// await page.getByRole("link", { name: "Get started" }).click();

	// Expects page to have a heading with the name of Installation.
	// await expect(page.getByRole("heading", { name: "Installation" })).toBeVisible();
});
