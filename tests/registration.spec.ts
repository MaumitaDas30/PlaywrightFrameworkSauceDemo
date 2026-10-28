import {test, expect} from '@playwright/test'
import Register from '../PageObjectModel/register.page'
import data from "../DDT/registration.json"

test ("DemoQA registration via POM", async({page})=> {
    //creating object for pom class
    let registerPage = new Register(page)

    for(let user of data){

     await registerPage.launchURL(user.url)
     expect(page.locator('.text-center')).toHaveText("Practice Form")
     await registerPage.entername(user.name, user.lastName, user.email)
     await registerPage.selectgender(user.gender)
     await registerPage.enterMobileNo(user.mob)
     await registerPage.selectdate(user.year, user.month)
     await registerPage.selectSubject(user.subject)
     await registerPage.selectHobbies(user.hobbies) 
     await registerPage.uploadPicture(user.picturepath)
     await registerPage.enterAddress(user.address)
     await registerPage.selectStateAndCity(user.state, user.city)
     await registerPage.submitform() 
      

    }

})   