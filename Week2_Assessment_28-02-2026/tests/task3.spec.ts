import {test} from "@playwright/test";

test("task1", async ({page}) => {
    await page.goto("https://demoapps.qspiders.com/ui?scenario=1")
    await page.locator("//input[@id='name']").fill("Gautam Dhabhai")
    await page.locator("//input[@id='email']").fill("gautamdhabhai@gmail.com")
    await page.locator("//input[@id='password']").fill("Password123")
    await page.locator("//button[@type='submit']").click()
    await page.locator("//input[@id='email']").fill("gautamdhabhai@gmail.com")
    await page.locator("//input[@id='password']").fill("Password123")
    await page.locator("//button[@type='submit']").click()

    await page.screenshot({path:"./screenshots/task3.png"})
})