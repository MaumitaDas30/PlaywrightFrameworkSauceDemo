import excel from "exceljs"

export async function readExcel(

    filepath:string,
    sheetName: string,
    
):Promise<any[][]> {

let book = new excel.Workbook()
await book.xlsx.readFile(filepath)
let sheet = await book.getWorksheet(sheetName)


let data:any[][]=[]

sheet?.eachRow((row)=> {
    let rowData: any[]=[]
    row.eachCell((cell) => {
        rowData.push(cell.value)
    })
    data.push(rowData)
})
return data
}

export async function getRowValues(

    filepath:string,
    sheetName: string,
    rowNumber: number
):Promise<any[]> {

let book = new excel.Workbook()
await book.xlsx.readFile(filepath)
let sheet = await book.getWorksheet(sheetName)
let row = sheet?.getRow(rowNumber)

let rowData:any[]=[]

row?.eachCell((cell)=> {
    rowData.push(cell.toString())
})
return rowData
}

export async function getCellValues(
    filepath:string,
    sheetName: string,
    rowNumber:number,
    cellNumber: number
){
    let book = new excel.Workbook()
    await book.xlsx.readFile(filepath)
    let sheet=await book.getWorksheet(sheetName)

    let value= sheet?.getRow(rowNumber).getCell(cellNumber).value
    return String(value)

    //let value=sheet?.getRow(rowNumber).getCell(cellNumber).toString()
    //return value

}

export async function writeExcel(
    filepath:string,
    sheetName: string,
    rowNumber:number,
    cellNumber: number,
    value:any
){
    let book = new excel.Workbook()
    await book.xlsx.readFile(filepath)
    let sheet=await book.getWorksheet(sheetName)

    sheet!.getCell(rowNumber,cellNumber).value = value 
    await book.xlsx.writeFile(filepath)
    
}