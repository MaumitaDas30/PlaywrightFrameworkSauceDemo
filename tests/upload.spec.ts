import {test,expect} from '@playwright/test'
import path from "path"

test("upload file", async ({page})=> {
  
    page.goto("https://testautomationpractice.blogspot.com/")
    
    //approoach 1:
    //single file upload:

    //await page.locator("#singleFileInput").setInputFiles("C:/Users/maumi/OneDrive/Desktop/playwrightM18/upload files/dem1.txt")
   // await page.getByRole('button', {name: 'Upload Single File', exact:true}).click();

    //multiple file upload:

   // await page.locator("#multipleFilesInput").setInputFiles(["C:/Users/maumi/OneDrive/Desktop/playwrightM18/upload files/dem1.txt", "C:/Users/maumi/OneDrive/Desktop/playwrightM18/upload files/demo.txt"])
   // await page.getByRole('button', {name: 'Upload Multiple Files', exact:true}).click();


   //while in path getting error I executed this command "npm install -D @types/node"
//Approach 2: more preferable
//await page.locator("#singleFileInput").setInputFiles(path.join(__dirname,"../upload files/dem1.txt"))
//await page.getByRole('button', {name: 'Upload Single File', exact:true}).click();

//await page.locator("#multipleFilesInput").setInputFiles([path.join(__dirname,"../upload files/dem1.txt"), path.join(__dirname,"../upload files/demo.txt")])
//await page.getByRole('button', {name: 'Upload Multiple Files', exact:true}).click();

//Approach 3:
await page.locator("#singleFileInput").setInputFiles("C:/Users/maumi/OneDrive/Documents/5 n coat.txt")
 await page.getByRole('button', {name: 'Upload Single File', exact:true}).click();
await expect(page.locator("#singleFileStatus")).toContainText(/Single file selected:/)

await page.locator("#multipleFilesInput").setInputFiles(["C:/Users/maumi/OneDrive/Documents/5 n coat.txt", "C:/Users/maumi/OneDrive/Documents/Doc1.docx"])
 await page.getByRole('button', {name: 'Upload Multiple Files', exact:true}).click();

 let uploadStatus= await page.locator("#multipleFilesStatus")

  await expect(uploadStatus).toContainText('5 n coat.txt');
  await expect(uploadStatus).toContainText('Doc1.docx');


})