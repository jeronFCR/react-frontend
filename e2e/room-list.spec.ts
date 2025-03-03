import { test, expect } from "@playwright/test";

test.describe("Room List Flow", () => {
    test.beforeEach(async ({ page }) => {
        await page.goto("/");
        await page.waitForTimeout(2500);
    });

    test("Rooms are displayed correctly", async ({ page }) => {
        const roomItems = await page.getByTestId("room-list-item").count();
        expect(roomItems).toBeGreaterThan(0);
    });

    test("Filter rooms by name", async ({ page }) => {
        await page.fill("input[placeholder='Type room name...']", "Room 20");
        const filteredRooms = await page.getByTestId("room-list-item").count();
        expect(filteredRooms).toBeGreaterThan(0);
    });

    test("Pagination works correctly", async ({ page }) => {
        expect(page.getByTestId('room-list-reset-page')).toHaveText("Page 1");
        await page.getByTestId("room-list-next-page").click();
        await page.waitForTimeout(500);
        expect(page.getByTestId('room-list-reset-page')).toHaveText("Page 2");
    });

    test("Release a busy room and verify status and name change", async ({ page }) => {
        const roomNumber = Math.floor(Math.random() * 10) + 1;
        await page.fill("input[placeholder='Type room name...']", `Room ${roomNumber}`);
        const busyRoom = page.locator("[data-testid='room-list-item']:has-text('Busy')").first();
        const roomName = await busyRoom.locator("[data-testid='room-list-name']").innerText();

        await busyRoom.click();
        await expect(page).toHaveURL(/\/rooms\/[a-f0-9-]+/);

        await page.click("button:has-text('Release')");
        await page.waitForTimeout(1000);
        await page.goBack();
        await page.fill("input[placeholder='Type room name...']", roomName);
        const roomWithAvailableStatus = page.locator(`[data-testid='room-list-item']:has-text('${roomName}')`).first();
        await expect(roomWithAvailableStatus.locator(":scope")).toContainText("Available");
    });

    test("Filter rooms by availability", async ({ page }) => {
        await page.click("[data-testid='room-list-available-filter']");
        const filteredRooms = await page.getByTestId("room-list-item").count();
        expect(filteredRooms).toBeGreaterThan(0);
    });
});