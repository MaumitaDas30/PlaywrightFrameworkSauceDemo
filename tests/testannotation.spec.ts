import {test} from '@playwright/test'

test ("test1", async ({page})=> {

console.log("test1")
})

test ("test2", async ({page})=> {

console.log("test2")
})
test ("test3", async ({page})=> {

//console.log("test3")
await page.goto("https://www.amazon.com/")
//test.slow()
})

test.describe("Logintest", ()=> {
    test("validation", async({page})=>
    {
        console.log("valid Login test")
    })
    test("invalid", async({page})=>
    {
        console.log("Invalid Login test")
    })
})
test("timeout", async({page})=>
{
test.setTimeout(60000)
await page.goto("uuhttps://www.amazon.com/")
})
