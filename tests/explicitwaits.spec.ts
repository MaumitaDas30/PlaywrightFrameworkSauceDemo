import {test, expect} from "@playwright/test"

test("element_based_waits", async({page})=> {
   
    await page.goto("https://www.amazon.in/")

    await page.getByPlaceholder('Search Amazon.in', {exact:true}).fill("shoes")
    
   // await page.locator(".s-suggestion-container").first().waitFor({timeout:20000, state:"detached"})

    let suggestions = await page.locator(".s-suggestion-container").allTextContents()

    console.log(suggestions)

})

test("waitFornavigation", async({page})=> {
   
    await page.goto("https://demoapps.qspiders.com/ui?scenario=1")
    /*
    await Promise.all([
       await page.getByText("Check Box", {exact:true}).click()
    ])

     await Promise.all([
       page.waitForURL("https://demoapps.qspiders.com/ui/checkbox")   
       page.getByText("Check Box", )
    ])
    */
    await page.waitForLoadState("networkidle")

})

test("waitForEvent", async({page})=> {
   
    await page.goto("https://demoapps.qspiders.com/ui/download?sublist=0")
    await page.getByPlaceholder("Enter text here", {exact:true}).fill(" I am downloading the file")
    
    let [downloadfile] = await Promise.all([
       page.waitForEvent("download"),
       page.locator("#downloadButton").click() 

    ])
    
  console.log(await downloadfile.path());
        
})

test.only("custom waits", async({page})=> {
 
    await page.goto("https://www.amazon.com/")

    await page.waitForFunction(()=> {

        return document.readyState === "complete"
        //dcumeny.readyState --> it will check the html dom 
        // structure that is the elements are loaded / elements 
        // are on readystate to perform actions or not.
    })
    await page.getByPlaceholder("Search Amazon.in", {exact:true}).fill("shoes")

    await page.waitForFunction(()=> {
     let element = document.querySelectorAll("s-suggestion-container")
     return element.length> 1 
    })

})