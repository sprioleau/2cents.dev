import { test, expect } from "@playwright/test";

test("has correct page title and headings", async ({ page }) => {
	await page.goto("http://127.0.0.1:3000");
	await expect(page).toHaveTitle(/2cents/);
	await expect(page.getByRole("heading", { name: "Add your 2" })).toBeVisible();
	await expect(page.getByText("Share your thoughts, whims and opinions with humanity")).toBeVisible();
});

test.describe("navbar", () => {
	test("displays navbar", async ({ page }) => {
		await page.goto("http://127.0.0.1:3000");

		const logo = page.getByRole("link", { name: "2cents logo" });
		const byline = page.getByRole("link", { name: "@sprioleau" });

		await expect(logo).toBeVisible();
		await expect(byline).toBeVisible();
	});

	test("byline navigates to GitHub", async ({ page }) => {
		await page.goto("http://127.0.0.1:3000");

		const byline = page.getByRole("link", { name: "@sprioleau" });

		await byline.click();
		await expect(page).toHaveURL("https://github.com/sprioleau");
	});

	test("logo reloads page", async ({ page }) => {
		await page.goto("http://127.0.0.1:3000");

		const logo = page.getByRole("link", { name: "2cents logo" });

		await logo.click();
		await expect(page).toHaveURL("http://127.0.0.1:3000");
	});
});

test.describe("new message flow", () => {
	test("displays title", async ({ page }) => {
		await page.goto("http://127.0.0.1:3000");

		await expect(page.getByRole("heading", { name: "New Message" })).toBeVisible();
		await expect(page.getByRole("heading", { name: "Messages" })).toBeVisible();
	});

	test('displays "New Message" form with no errors', async ({ page }) => {
		await page.goto("http://127.0.0.1:3000");

		await expect(page.locator("label", { hasText: "Name" })).toBeVisible();
		await expect(page.getByText("Name is required")).not.toBeVisible();
		await expect(page.locator("label", { hasText: "Message" })).toBeVisible();
		await expect(page.getByText("Message is required")).not.toBeVisible();
	});

	test("can complete form, submit it and see new message", async ({ page }) => {
		await page.goto("http://127.0.0.1:3000");

		const nameInput = page.getByPlaceholder("Enter your name");
		const messageTextarea = page.getByPlaceholder("Your message");
		const submitButton = page.getByRole("button", { name: "Add your 2 cents" });

		const uniqueId = Date.now().toString();
		const name = `Jamie - ${uniqueId}`;
		const message = `The world is yours! 🌎 - ${uniqueId}`;

		await nameInput.fill(name);
		await messageTextarea.fill(message);

		// Submit
		await submitButton.click();

		// Clear form after submission
		await expect(nameInput).toHaveValue("");
		await expect(messageTextarea).toHaveValue("");

		// Check that message is displayed
		await expect(page.getByText(name)).toBeVisible();
		await expect(page.getByText(message)).toBeVisible();

		// Locate message
		const messageContainer = page.locator("article", { hasText: message });

		// Locate delete button and click it
		const deleteButton = messageContainer.getByRole("button", { name: "Delete" });
		deleteButton.click();

		// Check that message is no longer displayed
		await expect(messageContainer).not.toBeVisible();
	});

	test("can delete message", async ({ page }) => {
		await page.goto("http://127.0.0.1:3000");

		const uniqueId = Date.now().toString();
		const name = `Hector - ${uniqueId}`;
		const message = `Soon to be forgotten - ${uniqueId}`;

		const nameInput = page.getByPlaceholder("Enter your name");
		const messageTextarea = page.getByPlaceholder("Your message");
		const submitButton = page.getByRole("button", { name: "Add your 2 cents" });

		await nameInput.fill(name);
		await messageTextarea.fill(message);

		// Submit
		await submitButton.click();

		// Locate message
		const messageContainer = page.locator("article", { hasText: message });

		// Locate delete button and click it
		const deleteButton = messageContainer.getByRole("button", { name: "Delete" });
		deleteButton.click();

		// Check that message is no longer displayed
		await expect(messageContainer).not.toBeVisible();
	});
});
