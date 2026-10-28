import {test, expect} from '@playwright/test'

test ("hard coded", async({page})=> {
  await page.waitForTimeout(2000)  
  await page.goto("https://practicetestautomation.com/practice-test-login/")
  
  await page.waitForTimeout(2000) 
  await page.locator('//input[@id="username"]').fill("student")
 
  await page.waitForTimeout(2000) 
  await page.getByLabel("Password", {exact:true}).fill("Password123")

  await page.waitForTimeout(2000) 
  await page.getByRole("button", {name: "Submit",exact:true}).click()

})

test.only ("amazon search shoes", async({page})=> {
    
  await page.goto("https://www.amazon.com/")
  //expect(page).toHaveTitle("amazon")

  await page.getByPlaceholder("Search Amazon").fill("shoes")
  await page.locator("//input[@type='submit']").first().click()
  
  const firstproduct= page.locator("(//div[@class='a-section a-spacing-small puis-padding-left-small puis-padding-right-small'])[position()=1]")
  
  console.log(await firstproduct.textContent())

})