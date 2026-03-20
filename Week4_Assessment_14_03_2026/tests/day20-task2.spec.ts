import { test, expect } from "@playwright/test";
import path from 'path'
import fs from 'fs'

test("day20 task2", async ({ page }) => {
    const data = fs.readFileSync(path.join(__dirname, '../testdata/day20-task2.json'), "utf-8");
    const jsonData = JSON.parse(data);
    for (let i = 0; i < jsonData.length; i++) {
        await page.goto('https://demoqa.com/automation-practice-form');
        await page.locator('#firstName').fill(jsonData[i].firstName);
        await page.locator('#lastName').fill(jsonData[i].lastName);
        await page.locator('#userEmail').fill(jsonData[i].email);

        if (jsonData[i].gender == 'Male') {
            await page.locator('#gender-radio-1').click();
        } else if (jsonData[i].gender == 'Female') {
            await page.locator('#gender-radio-2').click();
        } else {
            await page.locator('#gender-radio-3').click();
        }

        await page.locator('#userNumber').fill(jsonData[i].mobile);

        await page.locator('#dateOfBirthInput').click();
        await page.locator('//select[@class="react-datepicker__month-select"]').selectOption(jsonData[i].dob.month);
        await page.locator('//select[@class="react-datepicker__year-select"]').selectOption(jsonData[i].dob.year);
        await page.locator(`.react-datepicker__day--0${jsonData[i].dob.day}`).first().click();

        await page.locator('#subjectsInput').fill(jsonData[i].subject);
        await page.keyboard.press('Enter');

        if (jsonData[i].hobby == 'Sports') {
            await page.locator('#hobbies-checkbox-1').click();
        } else if (jsonData[i].hobby == 'Reading') {
            await page.locator('#hobbies-checkbox-2').click();
        } else if (jsonData[i].hobby == 'Music') {
            await page.locator('#hobbies-checkbox-3').click();
        }

        await page.locator('#uploadPicture').setInputFiles(path.join(__dirname, jsonData[i].image));

        await page.locator('#currentAddress').fill(jsonData[i].address);

        await page.locator('#react-select-3-input').fill(jsonData[i].state);
        await page.keyboard.press('Enter');
        await page.locator('#react-select-4-input').fill(jsonData[i].city);
        await page.keyboard.press('Enter');

        await page.locator('#submit').scrollIntoViewIfNeeded();
        await page.waitForTimeout(2000);
        await page.locator('#submit').click();
        await page.waitForTimeout(1000);


    }
    await page.screenshot({ path: `screenshots/day20-task2.png` });

})