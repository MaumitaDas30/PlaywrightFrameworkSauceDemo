import {test} from '@playwright/test'

test("cssiselector", async({page})=> {

await page.goto("https://demoapps.qspiders.com/ui?scenario=1")
page.locator("input[id='name']").fill("Hiya")

page.locator("#email").fill("Hh")

//class attribute
await page.goto("https://www.saucedemo.com/")
await page.locator("input.submit-button").click()

})