import {test} from '@playwright/test'
import PomLogin from "../PageObjectModel/loginpage.page" 
import value from "../DDT/jsondata2.json"

test("login by POM", async({page})=> {
  
    //creating object of pom class
    let Loginpage = new PomLogin(page);

    await page.goto("https://practicetestautomation.com/practice-test-login/")
    await Loginpage.txtUsername.fill("student")
    await Loginpage.txtPassword.fill("Password123")
    await Loginpage.BtnSubmit.click()

})

test("POM +ddt login", async({page})=> {
  
    //creating object of pom class
    let Loginpage = new PomLogin(page);

   for(let testdata of value.valid){
     let url=testdata.url
     let username=testdata.username
     let password = testdata.password 

   
    await page.goto(url)
    await Loginpage.txtUsername.fill(username)
    await Loginpage.txtPassword.fill(password)
    await Loginpage.BtnSubmit.click()
   }
})

/*  one method
test.only("pom method", async({page})=> {
   
    let LoginPage=new PomLogin(page)
    await page.goto("https://practicetestautomation.com/practice-test-login/")
    await LoginPage.loginMethod()

})
*/
 test.only("pom method approach2", async({page})=> {
   
    for(let testdata of value.valid){
        let LoginPage = new PomLogin(page)
   //await page.goto(testdata.url)

         await LoginPage.loginMethod(testdata.url, testdata.username, testdata.password)
    }
    

})   