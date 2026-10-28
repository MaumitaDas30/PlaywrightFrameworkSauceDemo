import {test, expect} from '@playwright/test'

test("login by POM", async({page})=> {
   

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    
    await page.getByPlaceholder("Username", {exact:true}).fill("Admin")
    await page.getByPlaceholder("Password", {exact:true}).fill("admin123")
    await page.getByRole("button", {name:'Login', exact:true}).click()
   
    //check the title
    //await expect(page).toHaveTitle("")

    await page.locator("//span[text()= 'PIM']").click()
    await page.getByRole("button", {name:' Add', exact:true}).click()

//assertion Add Employee
    await expect(page.getByRole("heading", {name: 'Add Employee', exact:true})).toBeVisible() 

    let FName = await page.getByPlaceholder("First Name", {exact:true})
     await FName.fill("M")
    let MName=  page.getByPlaceholder("Middle Name", {exact:true})
    await MName.fill("M")
    let LName = page.getByPlaceholder("Last Name", {exact:true})
    await LName.fill("D")

   let Eid= page.locator("//label[text()='Employee Id']/parent::div/following-sibling::div/input")
   await Eid.fill("5632147")

    await page.locator("input[type='file']").setInputFiles("C:/Users/maumi/Downloads/yellow-flowe.jpg")

    await page.getByRole("button", {name:'Save', exact:true}).click()


    //assertion Personal details
    await expect(page.getByRole("heading", {name: 'Personal Details', exact:true})).toBeVisible()
    
    await expect(page).toHaveURL(/viewPersonalDetails/)

    //assertion for name and employee id field
    await expect(FName).toHaveValue("M")
    await expect(MName).toHaveValue("M")
    await expect(LName).toHaveValue("D")
    await expect(Eid).toHaveValue("5632147")

    await page.locator('//input[@class="oxd-input oxd-input--focus"]').fill("011")
    await page.locator('oxd-input oxd-input--focus').fill("KA0320150001234")

    //licence expiry date
    

    
})