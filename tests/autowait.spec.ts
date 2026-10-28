import {test, expect} from '@playwright/test'

test.use({
    actionTimeout: 20000
})


test("autowait", async({page})=> {

 await page.setDefaultTimeout(25000)   

await page.goto("https://practicetestautomation.com/practice-test-login/")
await page.locator('//input[@id="username"]').fill("student")
 
await page.getByLabel("pasrd", {exact:true}).fill("Password123")

await page.getByRole("button", {name: "Submit",exact:true}).click()


})
test('auto waits 1', async({page})=> {
 
await page.goto("https://practicetestautomation.com/practice-test-login/")
await page.locator('//input[@id="username"]').fill("student")
 
await page.getByLabel("pasrd", {exact:true}).fill("Password123")

await page.getByRole("button", {name: "Submit",exact:true}).click()

})