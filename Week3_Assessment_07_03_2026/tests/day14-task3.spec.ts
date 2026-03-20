import {test} from '@playwright/test'

test("cricbuzz", async ({ page }) => {
  await page.goto('https://www.cricbuzz.com/');
  await page.getByRole("link", {name:'Live Scores'}).click();
  await page.getByRole("link", {name:'Scorecard'}).first().click();
  let score = await page.locator('//div[@id="scard-team-71-innings-1"][1]/div/div/div[2]/div[2]').first().textContent();
  let name = await page.locator('//div[@class="flex flex-col gap-1 tb:flex-row tb:justify-between wb:flex-row wb:justify-between"]//a').first().textContent();
  console.log(`Score of ${name} is ${score}`);
  await page.screenshot({ path: "./screenshots/day14-task3.png" });

});