import {test,expect} from '@playwright/test'
import path from "path"
import fs from "fs" //file system

test.only("download file", async ({page})=> {
  await page.goto("https://demoapps.qspiders.com/ui/download?sublist=0")
  await page.getByPlaceholder("Enter text here", {exact: true}).fill("my downloaded file")

  await page.locator("#fileName").fill("download1.txt")

  let [downloadfile] = await Promise.all([

    page.waitForEvent("download"),
    page.getByRole("button", {name: "Download", exact:true}).click()
  ])

  let downloadedfolder="C:/Users/maumi/OneDrive/Desktop/playwrightM18/download files"
  let filename= downloadfile.suggestedFilename()

  await downloadfile.saveAs(path.join(downloadedfolder,filename))
  
  let filepath=path.join(downloadedfolder,filename)

  let data=fs.readFileSync(filepath, 'utf-8')

  await expect(data).toContain("my downloaded file")

})   

test("download demo", async ({page})=> {
  await page.goto("https://demo.automationtesting.in/FileDownload.html")
  await page.locator("//textarea[@id='textbox']").fill("This my new downloaded file section.")

  await page.locator("(//button[text()='Generate File'])[1]").click({force: true}) 


  let [downloadfile] = await Promise.all([

    page.waitForEvent("download"),
    page.locator("//a[@id='link-to-download']").click()
  ])

  let downloadedfolder="C:/Users/maumi/OneDrive/Desktop/playwrightM18/download files"
  let filename= downloadfile.suggestedFilename()

  await downloadfile.saveAs(path.join(downloadedfolder,filename))
  
  let filepath=path.join(downloadedfolder,filename)

  let data=fs.readFileSync(filepath, 'utf-8')

  await expect(data).toContain("This my new downloaded file section.")


})