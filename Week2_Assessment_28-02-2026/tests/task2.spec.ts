import {test} from '@playwright/test'

test("flipkart fetching", async({page}) => {
    await page.goto("https://www.flipkart.com");
    let srch = await page.locator('//input[@type="text" and @class="Vy9RSP"]');
    let closeBtn = await page.locator('//span[@role="button"]')
    await closeBtn.click();
    await srch.fill("phones");
    let srchbtn = await page.locator('//button[@type="submit"]');
    await srchbtn.click();
    let appleChckbox = await page.locator('//input[@type="checkbox" and @class="UXWKAE"]').nth(1);
    await appleChckbox.click();
    let price = page.locator('//div[@class="QSCKDh dLgFEE"]//div[@class="lvJbLV col-12-12"][3]//div[@class="hZ3P6w DeU9vF"]');
    console.log(await price.textContent());
    await page.screenshot({path: "./screenshot/task2.png"})
});