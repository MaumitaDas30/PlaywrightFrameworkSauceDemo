import {test, expect} from '@playwright/test'

test("testcase11", async({page})=> {

await page.goto("https://demoapps.qspiders.com/ui/button?sublist=0")

await page.locator("#btn").click()
//bydefault click() will perform left click()

let value1 = 'You selected "Yes"'
await expect(value1).toContain('You selected "Yes"')


//-----------------------------------

await page.goto("https://demoapps.qspiders.com/ui/button/buttonRight?sublist=1")
await page.locator("#btn_a").click({button:"right", clickCount:6})

await page.getByText('Yes', {exact:true}).click({delay:5000,force:true,})

let value = 'You selected "Yes"'
await expect(value1).toContain('You selected "Yes"')


//button--> it will specify which mouse should be clicked, bydefault it will click perform left click.
// clickcount--> it will specify the number of mouse clicks
//delay --> it will specify the time between the press ans release of mouse button
//force -> if the element is disabled force will help to 




})
test("hover, down, up", async({page})=> {
 await page.goto("https://demoapps.qspiders.com/ui/clickHold?sublist=0")
 await page.locator("#circle").hover()
 //hover: it will hover the cursor on the specified element

 //down -- it is used t press the mouse button
 //up-- it is used to release the mouse button

 await page.mouse.down()

 await page.waitForTimeout(5000)

 await page.mouse.up()

 await page.locator("#circle").click({delay:5000})

})
test("move, boundingBox", async({page})=> {
 await page.goto("https://demoapps.qspiders.com/ui/mouseHover?sublist=0")
 
 //buondingBox() -- A buondingBox is the position and size of 
 // a webelement on the page, represented using X and Y coordinates, width and height 
let box= await page.locator('.w-5.h-5.mt-5.ml-3.cursor-pointer ').boundingBox()
console.log(box);

 //move() means moving the mouse pointer from its current
 // psition to a specified location or web element

 await page.locator('.w-5.h-5.mt-5.ml-3.cursor-pointer ').hover()

 await page.mouse.move(770.734375, 251.71875)

let icontext= await page.locator(".text-sm.list-disc.ml-5.p-1").allTextContents()
console.log(icontext)

})
test("scrolling", async({page})=> {
 await page.goto("https://demoapps.qspiders.com/ui/scroll/newTabVertical")
 
//await page.locator('[type="checkbox"]').scrollIntoViewIfNeeded()
//await page.locator('[type="checkbox"]').click()
 
//vertical scrolling
await page.mouse.wheel(0,1000)
await page.mouse.wheel(0,-900)

//horizontal scrolling
await page.goto("https://demoapps.qspiders.com/ui/scroll/newTabHorizontal")
 await page.mouse.wheel(1000,0)
await page.mouse.wheel(-600,0)

})
test.only("dragandrop", async({page})=> {
 /*//case1:
 await page.goto("https://demoapps.qspiders.com/ui/dragDrop?sublist=0")
 await page.getByText("", {exact:true}).hover()

 await page.mouse.down()
 await page.mouse.move(200,500)
 await page.mouse.up()
*/
 //case2:
 await page.goto("https://demoapps.qspiders.com/ui/dragDrop/dragToCorrect?sublist=2")
 //await page.getByText("Mobile Charger", {exact:true}).hover()
 //await page.mouse.down()
 //await page.locator('//div[text()="Mobile Accessories"]/parent::div').hover()
 //await page.mouse.up()


 //case3 : syntax:- target.dragTo(surce)
await page.getByText("Mobile Charger", {exact:true}).dragTo(page.locator('//div[text()="Mobile Accessories"]/parent::div'))




})