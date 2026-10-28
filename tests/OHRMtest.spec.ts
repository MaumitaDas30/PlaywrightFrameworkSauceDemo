import {test,expect} from '@playwright/test'
import PomLogin from "../PageObjectModel/OHRMLogin.page" 
import Addemployee from '../PageObjectModel/OHRMPIMAddemp.page'
import data from "../DDT/ohrmadddemp.json"
test("OrangeHRM test", async({page})=> {
   
    let LoginPage=new PomLogin(page)
    await LoginPage.openUrl();
    await LoginPage.loginMethod();

    await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")
    
    await page.locator("//span[text()= 'PIM']").click()

    //open add button
    await page.getByRole("button", {name:' Add', exact:true}).click()

    //assertion Add Employee
    //await expect(page.getByRole("heading", {name: 'Add Employee', exact:true})).toContainText("Add Employee") 

    let addemployee = new Addemployee(page)
    //for(let user of data){

     await addemployee.entername(data.firstname, data.middlename, data.lastname)
     await addemployee.employeeid(data.empid)
    await addemployee.uploadPicture(data.picturepath)
 //   }
    })