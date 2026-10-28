import {test, expect} from '@playwright/test'
import registration from '../PageObjectModel/demoqa.page.ts'
import jsondata from "../DDT/registration.json"

test ("registration via POM", async({page})=> {
    //creating object for pom class
    let registrationPage = new registration(page)

    await page.goto("https://demoqa.com/automation-practice-form")
    
    await registrationPage.txtFName.fill("Maumita")
    await registrationPage.txtLName.fill("Das")
    await registrationPage.txtEmail.fill("md@gmail.com")
    await registrationPage.btnFemale.check()

    //check that female radio button is checked
    //expect(genderSelect).

    await registrationPage.txtMobile.fill("9563254785")

    //select DateOfBirth
    await registrationPage.locDateofBirth.click()
    await registrationPage.selectYear.selectOption({label:"2000"})
    await registrationPage.selectMonth.selectOption({value:"4"})
    await registrationPage.selectDateofBirth.click()

    //subjectt selection
    await registrationPage.txtSubjectInput.fill("a")
    await page.keyboard.press("ArrowDown")
    await page.keyboard.press("ArrowDown")
    await page.keyboard.press("Enter")

   /* let subjects = await page.locator(".subjects-auto-complete__option css-10wo9uf-option").all()

for (let option of subjects)
   {
     let subjectName = await option.textContent();

     if(subjectName?.includes("Arts"))
     {
      await option.click();
      break;
     }
   }
*/

    await registrationPage.chkMusic.check()

    await registrationPage.filePicture.setInputFiles("C:/Users/maumi/Downloads/error-context (3).md")

    await registrationPage.txtAddress.fill("Whilefield Bangalore")

    //select State
    await registrationPage.drpState.click()
    await page.keyboard.press("ArrowDown")
    await page.keyboard.press("ArrowDown")
    await page.keyboard.press("Enter")
   
    //select city
    await registrationPage.drpCity.click()
    await registrationPage.cityPanipat.click()
 
    await registrationPage.btnSubmit.click()

})

test.only("Pom with json data registration", async({page})=> {
   //creating object of pom class
   let newRegistration = new registration(page);

   for(let testdata of jsondata)
   {
    let url=testdata.url
    let FirstName:string=testdata.FirstName
    let LastName:string=testdata.LastName
    let Email:string=testdata.Email
    let gender=testdata.gender
    let Mobile: number=testdata.Mobile
    let Year = testdata.Year
    let Month = testdata.Month
    let date = testdata.date
    



    await page.goto(url)

    await newRegistration.txtFName.fill(FirstName)
    await newRegistration.txtLName.fill(LastName)
    await newRegistration.txtEmail.fill(Email)
    await newRegistration.btnMale.check()
    await newRegistration.txtMobile.fill(Mobile)

    await newRegistration.locDateofBirth.click()
    await newRegistration.selectYear.selectOption({label:Year})
    await newRegistration.selectMonth.selectOption({value:Month})

    await newRegistration.selectDateofBirth.click()

    
   }

})
   