import { randomUUID } from "crypto";
import { test, expect } from "@playwright/test";

test("user should be able to signup",async ({ page }) => {
  // const email = `xotabu4+${randomUUID().replace(/\-/g, '')}@gmail.com`;
  const email = `xotabu4+${randomUUID()}@gmail.com`;
  await page.goto("https://shopdemo-alex-hot.koyeb.app/");
  await page.getByRole("link", { name: "Welcome! " }).click();
  await page.getByRole("menuitem", { name: "Sign Up" }).click();
  await page
    .getByRole("main")
    .getByPlaceholder("Please Enter Your Email")
    .fill(email);
  await page.getByPlaceholder("Please Enter Your First Name").fill("Alex");
  await page.getByPlaceholder("Please Enter Your Last Name").fill("Hot");
  await page.getByPlaceholder("Please Enter Your Password").fill(email);
  await page.getByRole("button", { name: "Sign Up" }).click();
  await expect(
    page.getByRole("heading", { name: "Account Details" }),
    "Account Details should be visible after signup"
  ).toBeVisible();
});