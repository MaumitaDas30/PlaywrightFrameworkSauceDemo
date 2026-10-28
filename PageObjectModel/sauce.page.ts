import {Locator, Page} from "@playwright/test"

export class sauceLogin{
    
    page: Page
    txtUsername : Locator
    txtPassword : Locator
    BtnLogin : Locator

  constructor(page : page){

   this.page = page
   this.txtUsername = page.locator("#user-name")
   this.txtPassword = page.locator("#password")
   this.BtnLogin = page.locator("#login-button")

  }

  async openUrl()
  {
    await this.page.goto("https://www.saucedemo.com/")
  }
   async loginMethod()
   {
    
    this.txtUsername.fill("standard_user")
    this.txtPassword.fill("secret_sauce")
    await this.page.waitForTimeout(3000)
    await this.BtnLogin.click()
   }
}
