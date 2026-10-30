import {test,expect} from "@playwright/test"

test("frame intr", async({page})=> {
 await page.goto("https://ui.vision/demo/webtest/frames/")

 //await page.locator('[name="mytext1"]').fill("hello")

//approach1:-
let frame1= await page.frameLocator("//frame[@src='frame_1.html']")
await frame1.locator('[name="mytext1"]').fill("hello")


//approach2:-
let frame2= await page.locator("//frame[@src='frame_2.html']").contentFrame()
await frame2.locator('[name="mytext2"]').fill("Bye")

//interact with frame4 and frame5

let frame4= await page.frameLocator("//frame[@src='frame_4.html']")
await frame4.locator('[name="mytext4"]').fill("Good morning")

let frame5= await page.locator('//frame[@src="frame_5.html"]').contentFrame()
await frame5.locator('[name="mytext5"]').fill("Welcome")

})

test.only("nested frame", async({page})=> {
 await page.goto("https://ui.vision/demo/webtest/frames/")
 
 let frame3= await page.frameLocator('//frame[@src="frame_3.html"]')
 await frame3.locator('[name="mytext3"]').fill("nested frame")

 let iframe= await frame3.frameLocator("//iframe[@src='https://docs.google.com/forms/d/e/1FAIpQLSf5WiH3jEQApYku0Rl_nreU6_YMuLKAH5ffHuASyykQSIBjmg/viewform?embedded=true']")
 
 let radiobutton= await iframe.locator('//div[@class="AB7Lab Id5V1"]').nth(1)
 await radiobutton.check()
 //expect(radiobutton).toBeChecked()

 let checkbox= await iframe.locator("(//div[@class='uHMk6b fsHoPb'])[2]")
 await checkbox.click()
 //expect(checkbox).toBeChecked()

}) 