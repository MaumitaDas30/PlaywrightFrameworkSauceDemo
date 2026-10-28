import {test} from "@playwright/test"
import excel from 'exceljs'
import path from "path"

test('writing data in excel file', async({page})=> {

    let book = new excel.Workbook();
    await book.xlsx.readFile(path.join(__dirname,"../DDT/excelfile1.xlsx"));

    let sheet=await book.getWorksheet("Sheet4")

    if(!sheet)
    {
        sheet= await book.addWorksheet("Sheet4")
    }
    sheet.getRow(1).getCell(1).value= "Playwright"

    await book.xlsx.writeFile(path.join(__dirname,"../DDT/excelfile1.xlsx"))
})
test.only("from application", async({page})=> {
    let book = new excel.Workbook()
    await book.xlsx.readFile(path.join(__dirname,"../DDT/excelfile1.xlsx"))
    let sheet = await book.getWorksheet("Sheet6")

    if(!sheet){
        sheet = await book.addWorksheet("Sheet6")
    }
    await page.goto("https://www.amazon.com/")
    await page.getByPlaceholder("Search Amazon", {exact:true}).fill("books")
    await page.locator("//div[@class='s-suggestion-container']").first().waitFor()

    let alldata= await page.locator("//div[@class='s-suggestion-container']").allTextContents()
    console.log(alldata);

    for(let text of alldata)
    {
        let c= alldata.indexOf(text)
        //for horizontal, means in one row
        //sheet.getRow(1).getCell(c+1).value=text

        //for diagonal
        sheet.getRow(c+1).getCell(c+1).value=text
    }

    await book.xlsx.writeFile(path.join(__dirname,"../DDT/excelfile1.xlsx"));
    

})



