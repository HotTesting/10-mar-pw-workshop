import { test, expect } from "@playwright/test";
import { Login } from "../pages/login.page";

const email = "xotabu4@gmail.com";
const password = "xotabu4@gmail.com";

test("user can purchase product", async ({ page }) => {
  // LOGIN
  const login = new Login(page);
  await login.openAndLogin(email, password);

  // PURCHASE
  await page.getByRole("link", { name: "Brands " }).click();
  await page.getByRole("menuitem", { name: "Nizhyn cannery" }).click();
  await page.getByRole("link", { name: "CHERRY TOMATOES By Nizhyn" }).click();
  await page.getByRole("button", { name: "Add To Bag" }).click();
  await page.getByRole("button", { name: "Place Order" }).click();
  await expect(
    page.getByRole("heading", { level: 2, name: "Thank you for your order." })
  ).toBeVisible();
});

test("user can purchase 2 products", async ({ page }) => {
  // LOGIN
  const login = new Login(page)
  await login.openAndLogin(email, password);
  // PURCHASE
  await page.getByRole("link", { name: "Brands " }).click();
  await page.getByRole("menuitem", { name: "Nizhyn cannery" }).click();
  await page.getByRole("link", { name: "CHERRY TOMATOES By Nizhyn" }).click();
  await page.getByRole("button", { name: "Add To Bag" }).click();

  await page.goto("https://shopdemo-alex-hot.koyeb.app/");
  await page.getByRole("link", { name: "Brands " }).click();
  await page.getByRole("menuitem", { name: "Nizhyn cannery" }).click();
  await page.getByRole("link", { name: "MARINATED CUCUMBERS NEZHIN" }).click();
  await page.getByRole("button", { name: "Add To Bag" }).click();

  await page.getByRole("button", { name: "Place Order" }).click();
  await expect(
    page.getByRole("heading", { level: 2, name: "Thank you for your order." })
  ).toBeVisible();
});
