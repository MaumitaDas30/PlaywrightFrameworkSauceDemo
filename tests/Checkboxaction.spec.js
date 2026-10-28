/*
check() -- used to check the checkbox or radiobutton

uncheck() -- used to uncheck the checkbox or radiobutton

*/

import {test,expect} from '@playwright/test'

test("checkbox and radi button", async ({page})=> {

 await page.goto("https://demoapps.qspiders.com/ui/checkbox?sublist=0")

 await page.locator("#domain_a").check()
 await page.locator("#domain_c").check()

 await page.locator("#domain_a").uncheck()

})