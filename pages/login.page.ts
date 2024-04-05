import { Page } from "@playwright/test";

export class Login {
  page: Page;

  constructor(page: Page) {
    this.page = page;
  }
  async open() {
    await this.page.goto("https://shopdemo-alex-hot.koyeb.app/login");
  }

  async login(email: string, password: string) {
    await this.page
      .getByRole("main")
      .getByPlaceholder("Please Enter Your Email")
      .fill(email);
    await this.page.getByPlaceholder("Please Enter Your Password").fill(password);
    await this.page.getByRole("button", { name: "Login" }).click();
  }
  async openAndLogin(email: string, password: string) {
    await this.open();
    await this.login(email, password);
  }
}
