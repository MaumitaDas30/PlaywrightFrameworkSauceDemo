import {test} from '@playwright/test'

test("xpath", async({page})=> {
    await page.goto("https://practicetestautomation.com/practice-test-login/")
    await page.locator('//input[@id="username"]').fill("student")
    await page.locator('//input[contains(@name,"pass")]').fill("Password123")

    await page.locator('//button[contains(text(),"Submit")]').click() 

    await page.goto("https://www.flipkart.com/")
    await page.locator('//a[@title="Cart"]/child::span').click()

})

