import {test,expect} from '@playwright/test'

test("dialog", async ({page})=> {

await page.goto("https://testautomationpractice.blogspot.com/")

//page.on --> handle all the dialogs
//page.once--> handle only the first dialog


//event listner
page.on("dialog", async(dialog)=> {

    if(dialog.type()== "alert"){
        await dialog.accept()
    }

   else if(dialog.type()== "confirm"){
        await dialog.accept()
        console.log(await dialog.message());
    }
   else if(dialog.type()== "prompt"){
        console.log(await dialog.defaultValue());
        await dialog.accept("Tommy")
    }
})
 await page.getByRole("button", {name: "Simple Alert", exact:true}).click()

 await page.getByRole("button", {name: "Confirmation Alert", exact:true}).click()

 await page.getByRole("button", {name: "Prompt Alert", exact:true}).click()


})

test.only("Single dialog handle by page onc", async ({page})=> {

await page.goto("https://practice.expandtesting.com/js-dialogs")

//event listner
page.once("dialog", async(dialog)=> {

    if(dialog.type()== "alert"){
        console.log(await dialog.defaultValue())
        await dialog.accept()
    }
})
 await page.getByRole("button", {name: "Js Alert", exact:true}).click()
  
page.once("dialog", async(dialog)=> {

    if(dialog.type()== "confirm"){
        await dialog.accept()
        console.log(await dialog.message());
    }
})

 await page.getByRole("button", {name: "Js Confirm", exact:true}).click()

 page.once("dialog", async(dialog)=> {

    if(dialog.type()== "prompt"){
        console.log(await dialog.defaultValue());
        await dialog.accept("Hiya")
    }
})
 await page.getByRole("button", {name: "Js Prompt", exact:true}).click()


})
