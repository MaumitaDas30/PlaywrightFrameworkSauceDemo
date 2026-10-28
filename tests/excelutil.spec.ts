import {test} from "@playwright/test"

import {readExcel} from "../utility/excelUtility.ts"
import {getRowValues} from "../utility/excelUtility.ts"
import {getCellValues} from "../utility/excelUtility.ts"
import {writeExcel} from "../utility/excelUtility.ts"

test("excel util", async()=> {
   // let value = await readExcel("C:/Users/maumi/OneDrive/Desktop/playwrightM18/DDT/excelfile1.xlsx", "Sheet2")



   // console.log(value);

    //let value1 = await getRowValues("C:/Users/maumi/OneDrive/Desktop/playwrightM18/DDT/excelfile1.xlsx", "Sheet2", 4)
       // console.log(value1);

   // let value2 = await getRowValues("C:/Users/maumi/OneDrive/Desktop/playwrightM18/DDT/excelfile1.xlsx", "Sheet2", 4)
    //console.log(value2);

    await writeExcel("C:/Users/maumi/OneDrive/Desktop/playwrightM18/DDT/excelfile1.xlsx", "Sheet5", 1,1, "Playwright")
})