import { test, expect } from "@playwright/test";
import path from "path";
import fs from 'fs'



test("day20 task 4", async ({ page }) => {
    const data = fs.readFileSync(path.join(__dirname, '../testdata/day20-task4.json'), "utf-8");
    const jsonData = JSON.parse(data);
  await page.goto("https://demoqa.com/login");
  await page.locator("#newUser").click();
  
  await page.waitForTimeout(1000); 
  
  let firstName = page.getByPlaceholder("First Name");
  await firstName.click();
  await firstName.fill(jsonData.First_Name);

  let lastName = page.getByPlaceholder("Last Name");
  await lastName.fill(jsonData.Last_Name);
  let username = page.getByPlaceholder("UserName");
  await username.fill(jsonData.UserName);

  let password = page.getByPlaceholder("Password");
  await password.fill(jsonData.Password);
  
  await page.locator("#register").click();
  await page.getByRole("button", { name: "Back to Login" }).click();
  await username.fill(jsonData.UserName);
  await password.fill(jsonData.Password);
  await page.locator("#login").click();
  let gotobookstore = await page
    .getByRole("button", { name: "Go To Book Store" })
    .click();
  let search = await page.locator("#searchBox").fill(jsonData.bookname);
  let books = await page.locator("//tbody/tr//a").first().click();

  await page.on("dialog", async (e) => {
    await page.waitForTimeout(2000);
    await e.accept();
  });
  let addTocollection = await page
    .getByRole("button", { name: "Add To Your Collection" })
    .click();
  await page.goto("https://demoqa.com/profile");
  await expect(await page.locator("//tbody/tr").first()).toContainText(
    jsonData.bookname,
  );
  let logout = await page.getByRole("button", { name: "Logout" }).click();
  await page.screenshot({ path: "./screenshot/bookstore.png" });
});