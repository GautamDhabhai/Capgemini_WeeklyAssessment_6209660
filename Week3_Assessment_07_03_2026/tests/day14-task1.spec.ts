import {test} from '@playwright/test'

test("test", async ({ page }) => {
  await page.goto("https://www.icc-cricket.com/rankings");
  await page.getByRole("link", { name: "womens-batting-rankings" }).click();
  await page
    .locator(
      "#womens-bowling-rankings > div:nth-child(2) > .swiper > .swiper-wrapper > .swiper-slide.max-w-\\[328px\\].lg\\:max-w-\\[450px\\].mr-3.lg\\:mr-0.last\\:mr-0.swiper-slide-active > .w-\\[320px\\] > .overflow-hidden > .w-full > tbody > tr:nth-child(6) > .text-right > .text-primary",
    )
    .click();
  let rank = await page.locator(
    '//tbody//span[@class=" font-h4 pr-4 font-extrabold uppercase text-primary "]',
  ).textContent();
  let name = await page
    .locator('//div[@class="flex items-center justify-between gap-2"]')
    .first()
    .textContent();

  console.log(`Rank of ${name} is: ${rank}`);
  await page.screenshot({ path: "./screenshots/day14-task1.png" });
});