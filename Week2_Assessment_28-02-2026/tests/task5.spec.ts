import {test} from '@playwright/test'

test("amazon fetching", async({page}) => {
    await page.goto("https://www.amazon.in");
    let srch = await page.locator("input[type='text']");
    await srch.fill("shoes");
    let srchbtn = await page.locator("input#nav-search-submit-button");
    await srchbtn.click();
    let checkbox = await page.locator('//li[@id="p_90/6741118031"]');
    await checkbox.click();
    let fourthPrice = await page.locator('//div[@role="listitem"][4]//span[@class="a-price-whole"]');
    let fourthName = await page.locator('//div[@role="listitem"][4]//h2[@class="a-size-base-plus a-spacing-none a-color-base a-text-normal"]');
    console.log("Product name of 4th is:", await fourthName.textContent());
     console.log("Product price of 4th is:", await fourthPrice.textContent());
    await page.screenshot({path: "./screenshots/task5.png"})
})