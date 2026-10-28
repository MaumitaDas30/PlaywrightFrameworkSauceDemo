import {Locator, Page} from "@playwright/test"

class Login{

page: Page
txtUsername : Locator
txtPassword : Locator
BtnSubmit : Locator


constructor (page:Page)
{
    this.page=page
    this.txtUsername = page.getByLabel("Username", {exact:true})
    this.txtPassword = page.getByLabel("Password", {exact:true})
    this.BtnSubmit = page.getByRole('button', {name: "Submit",exact:true})
}
/* approach2
async loginMethod(){
  await this.txtUsername.fill("student")
  await this.txtPassword.fill("Password123")
  await this.BtnSubmit.click()
}
 */
async loginMethod(url:any, username:any,password:any){
  
  await this.page.goto(url)
    await this.txtUsername.fill("student")
  await this.txtPassword.fill("Password123")
  await this.BtnSubmit.click()
}
}
export default Login