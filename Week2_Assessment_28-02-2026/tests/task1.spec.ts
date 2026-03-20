import {test} from '@playwright/test'

test("amazon fetching", async({page}) => {
    await page.goto("https://www.amazon.in");
    let srch = await page.locator("input[type='text']");
    await srch.fill("shoes");
    let srchbtn = await page.locator("input#nav-search-submit-button");
    await srchbtn.click();
    let name = page.locator('//h2[@class="a-size-base-plus a-spacing-none a-color-base a-text-normal"]').nth(1);
    console.log(`The name is: ${await name.textContent()}`);
    let price = page.locator('//span[@class="a-price-whole"]').nth(1);
    console.log(`The price is: ${await price.textContent()}`);
    await page.screenshot({path: "./screenshot/task1.png"})
})