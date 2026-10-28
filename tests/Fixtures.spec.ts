import {test} from '@playwright/test'
/*
test("fixtures", async({browser,browserName})=> {

   console.log(browserName)
let context = await browser.newContext();
let page= await context.newPage()


   await page.goto("https://www.amazon.com/")
})
   */
 test("fixtures", async({context})=> {

let page= await context.newPage()


   await page.goto("https://www.amazon.com/")
}) 