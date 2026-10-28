import {Locator, Page} from "@playwright/test"

class Login{

page: Page
txtUsername : Locator
txtPassword : Locator
BtnLogin : Locator

constructor (page:Page)
{ 
this.page=page
this.txtUsername = page.getByPlaceholder("Username", {exact:true})
this.txtPassword = page.getByPlaceholder("Password", {exact:true})
this.BtnLogin = page.getByRole("button", {name:'Login', exact:true})

}
async openUrl()
{
    await this.page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
}
async loginMethod ()
{
    await this.txtUsername.fill("Admin")
    await this.txtPassword.fill("admin123")
    await this.BtnLogin.click()
}
}
export default Login