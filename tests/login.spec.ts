import { test, expect } from "@playwright/test";

test.describe("User login to Demobank", () => {
  test("successful login with correct credentials", async ({ page }) => {
    await page.goto("https://demo-bank.vercel.app/");
    await page.getByTestId("login-input").fill("tester12");
    await page.getByTestId("password-input").fill("12345678");
    await page.getByTestId("login-button").click();

    await expect(page.getByTestId("user-name")).toHaveText("Jan Demobankowy");
  });

  test("unsuccessful login with too short username", async ({ page }) => {
    await page.goto("https://demo-bank.vercel.app/");
    await page.getByTestId("login-input").fill("tester");
    await page.getByTestId("password-input").fill("12345678");

    await expect(page.getByTestId("error-login-id")).toHaveText(
      "identyfikator ma min. 8 znaków",
    );
  });

  test("unsuccessful login with too short password", async ({ page }) => {
    await page.goto("https://demo-bank.vercel.app/");
    await page.getByTestId("login-input").fill("tester12");
    await page.getByTestId("password-input").fill("12345");
    //await page.fill('#login_password','12345');
    await page.getByTestId("password-input").blur();

    // await page.screenshot({ path: 'screenshotA.png', fullPage: true });
    // const buffer = await page.screenshot();
    // console.log(buffer.toString('base64'));
    // await page.getByTestId('error-login-password').screenshot({ path: 'screenshotC.png' });

    //await expect(page).toHaveScreenshot();

    await expect(page.getByTestId("error-login-password")).toHaveText(
      "hasło ma min. 8 znaków",
    );
  });
});
