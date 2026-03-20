import { test, expect } from "@playwright/test";
import fs from 'fs'
import path from 'path'




test("day20 task1", async ({ page }) => {
    const data = fs.readFileSync(path.join(__dirname, '../testdata/day20-task1.json'), "utf-8");
    const jsonData = JSON.parse(data);
    await page.goto("https://www.amazon.in/");
    let search = await page.locator("input#twotabsearchtextbox");

    for (let item in jsonData) {
        await search.fill(jsonData[item]);
        await page.keyboard.press("Enter");
        let firstItem = await page
        .locator('//div[@data-component-type="s-search-result"]//img')
        .first();
        let [page2] = await Promise.all([
            page.waitForEvent("popup"),
            firstItem.click(),
        ]);
        let prodTitle = await page2.locator('//span[@id="productTitle"]');

        let prodRating = await page2.locator('//*[@id="acrPopover"]/span/a/span').first();
        let prodPrice = await page2
        .locator(
            '//div[@class="a-section a-spacing-none aok-align-center aok-relative apex-core-price-identifier"]//span[@class="a-price-whole"]',
        )
        .first();
        await expect(prodTitle).toBeVisible();
        await expect(prodRating).toBeVisible();
        await expect(prodPrice).toBeVisible();
        console.log(await prodTitle.textContent());
        console.log(await prodRating.textContent());
        console.log(await prodPrice.textContent());
        await page2.close();
    }
    await page.screenshot({path: `screenshots/day20-task1.png`});
});