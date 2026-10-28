import {test,expect} from "@playwright/test"

test("new tab", async({browser})=> {

    //creating multiple tabs manually

    let context= await browser.newContext()
    let page= await context.newPage()
    await page.goto("https://www.flipkart.com/")

    let page2= await context.newPage()
    await page.goto("https://www.amazon.com/")

})

test("multiple tabs", async({browser})=> {
 let context= await browser.newContext()
 let page= await context.newPage()

 await page.goto("https://www.flipkart.com/")
 await page.locator("//input[@class='nw1UBF v1zwn26']").first().fill("shoes")
 await page.locator('//button[@class="XFwMiH" and @type="submit"]/*[name()="svg"]').click()

 let [page2] = await Promise.all([

    page.waitForEvent("popup"),
    page.locator('(//img[@class="MZeksS"])[1]').click()
 ])

 await page2.locator("(//div[@class='_1psv1zeb9 _1psv1ze0 _1o6mltlk1 _1o6mltlf0 _1o6mltl4y _1o6mltl9z _7dzyg24y'])[1]").click()

})

//https://demoapps.qspiders.com/ui/browser?sublist=0

test.only("multiple tabs 2nd scenario", async({browser})=> {

let context=await browser.newContext()
let page= await context.newPage()

await page.goto("https://demoapps.qspiders.com/ui/browser/newTab?sublist=1")

let [page2]= await Promise.all([

    page.waitForEvent("popup"),
    page.locator('(//button[@class="mt-4 px-4 py-2 bg-orange-600 text-white font-semibold rounded hover:bg-orange-500"])[1]').click()

])

await page2.getByRole('button', {name: 'Add to Cart'}).click()

await expect(page2.locator('//section[@class="relative"]')).toHaveCount(1)

})

test("multiple tabs with 3rd scenario", async({browser})=> {

let context=await browser.newContext()
let page= await context.newPage()

await page.goto("https://demoapps.qspiders.com/ui/browser/newTab?sublist=1")

let [page2]= await Promise.all([

    page.waitForEvent("popup"),
    page.getByRole('button', {name:"view more"}).first().click()

])

await page2.getByRole('button', {name: 'Add to Cart'}).click()

let cartele= await page2.locator('//article').last()
let cartcount= parseInt(await cartele.textContent() || "0")

await expect(cartcount).toBeGreaterThan(0)

})