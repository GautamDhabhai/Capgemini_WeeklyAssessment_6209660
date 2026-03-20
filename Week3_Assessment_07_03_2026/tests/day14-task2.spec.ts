import {test} from '@playwright/test'

test("silver medal", async({page}) => {

    await page.goto("https://www.google.com");
    let srch = await page.locator('//textarea[@id="APjFqb"]');
    await srch.fill("tokyo olympics");
    await srch.press('Enter');
    await page.goto('https://www.olympics.com/en/olympic-games/tokyo-2020');
    await page.locator('//button[.="Yes, I am happy"]').click();
    let allAth = await page.locator('//a[@data-cy="link" and @class="primary" and .="All Athletes"]');
    await allAth.click();
    let name = await page.locator('//div[@data-row-id="athlete-row-7"]/div/a/div/h3').textContent();
    let silver = await page.locator('//div[@data-row-id="medals-row-7"]//div[@data-medal-id="silver-medals-7"]/span/span').textContent();
    
    console.log(`Silver medals of athlete ${name} are: ${silver}`);

    
    
    
   // await page.screenshot({path: "./screenshots/day13-task1.png"})
   await page.screenshot({ path: "./screenshots/day14-task2.png" });
})