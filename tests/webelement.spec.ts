import {test} from '@playwright/test'

test ("element", async({page})=> {

await page.goto("https://demoapps.qspiders.com/ui?scenario=1")

await page.getByPlaceholder("Enter your name", {exact:true}).fill("Hiya")

await page.getByPlaceholder("Enter Your Email", {exact:true}).fill("abc@gmail.com")

await page.getByPlaceholder("Enter your name", {exact:true}).type("Riya")

await page.getByPlaceholder("Enter Your Email", {exact:true}).type("xyz@gmail.com")

await page.locator("//button[text()='Register']").click()

let text1= await page.locator("//h1[text()='Register']").innerText()
console.log(text1)

let text2= await page.locator("//h1[text()='Register']").textContent()
console.log(text2)

let value= await page.locator('#name').inputValue()
console.log(value)

})

test ("chtest", async({page})=> {

await page.goto("https://testautomationpractice.blogspot.com/")

let alltext= await page.locator("//label[@class='form-check-label']").allTextContents()
console.log(alltext)

})

test("wait for", async({page})=> {
await page.goto("https://www.amazon.in/")

await page.getByPlaceholder("Search Amazon.in", {exact:true}).fill("shoes")

let text1=await page.locator(".s-suggestion-container").nth(9).textContent()
console.log(text1)

let text2=await page.locator(".s-suggestion-container").first().textContent()
console.log(text2)

let texts=await page.locator(".s-suggestion-container").allTextContents()
console.log(texts)

})

test.only("visibilitycheck", async({page})=> {
await page.goto("https://demoapps.qspiders.com/ui?scenario=1")
await page.locator("#name").waitFor()


let rest1=await page.locator("#name").isVisible()
let rest2=await page.locator("#name").isEditable()
let rest3=await page.locator("#name").isEnabled()
let rest4=await page.locator("#name").isDisabled()
let rest5=await page.locator("#name").isChecked()

console.log(rest1)
console.log(rest2)
console.log(rest3)
console.log(rest4)
console.log(rest5)

})