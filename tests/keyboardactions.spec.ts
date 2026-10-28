/*

*/

import {test,expect} from '@playwright/test'

test("checkbox and radi button", async ({page})=> {

 await page.goto("https://demoapps.qspiders.com/ui?scenario=1")
 await page.getByPlaceholder("Enter your name", {exact:true}).click()

 await page.keyboard.type('john')
//type()-- is used to fill the text in human format if  the element is focused

 await page.keyboard.insertText("demo")
 //insertText()-- is used to fill the text in the focused element in one go

 await page.keyboard.press("Control+A") //select all text
 await page.keyboard.press("Control+C") //copy all the select 


 await page.keyboard.press("Tab")
//press() is used to press the keyboard key (combination of keys also)

 await page.keyboard.press("Control+V") //paste the copied text

 //down()--> press the keywrd key but not release it
 await page.keyboard.down("Tab")

//up()--> it is used to release the currently pressed button
await page.keyboard.up("Tab")
await page.keyboard.insertText("123")

await page.locator('//span[@class="absolute text-slate-600 text-[18px] bg-gray-100"]').click()

 })

//launch th eapplication "https://practicetestautomation.com/practice-test-login/"

 test.only("assignment1", async({page})=> {
 page.goto("https://practicetestautomation.com/practice-test-login/")
  
 //fill student in usename TF
await page.getByRole("textbox", {name:'Username'}).click()
await page.keyboard.insertText("student")

 //press space without using press()
 await page.keyboard.press("Space")

 //fill stud but letter by letter
await page.keyboard.type("stu")

 //copy the whole username
 await page.keyboard.press("Control+A") 
 await page.keyboard.press("Control+C")


 //go to password textfield
await page.locator('//input[@id="password"]').click()

 //paste the copied usename in password textfield
await page.keyboard.press("Control+V")

 //click on submit
await page.locator(".btn").click()

 })