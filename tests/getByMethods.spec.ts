import {test} from '@playwright/test'
 test("getbymethod", async({page})=> {
   
   //await page.goto("https://demoapps.qspiders.com/ui?scenario=1")

   //getByLabel
   //await page.getByLabel("Name").fill("Maumita")
   
   //getByPlaceholder
   //await page.getByPlaceholder("Enter Your Email").type("mau@gmail.com")
   
   //getByText
   //await page.getByPlaceholder("Enter your password").fill("abcd")

   // await page.getByText("Register").last().click()

    //getByAltText
    //await page.getByAltText("signin").click()

    //await page.goto("https://demowebshop.tricentis.com/")
    //await page.getByAltText("Tricentis Demo Web Shop").click()

    //click o with tool tip element
    //await page.getByText("With ToolTip").click()
    //await page.getByTitle("Enter your Name").fill("hiya")

    //getByRole
     await page.goto("https://demowebshop.tricentis.com/")
    //await page.getByRole("textbox",{name: "q"}).first().fill("computers")
    await page.getByRole("button", {name:"Search"}).click()

    //getByTestId
    await page.goto("https://www.saucedemo.com/")
    await page.getByTestId("username").fill("hiya")

 })