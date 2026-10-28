import {test,expect} from '@playwright/test'

test("checkbox and radi button", async ({page})=> {

 await page.goto("https://demoapps.qspiders.com/ui/dropdown?sublist=0")
 
 //select option from country
 await page.locator("#select3").selectOption({value:'India'})

await page.locator("#select5").selectOption({label:"Jammu And Kashmir"})

await page.locator("(//select[@class='border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150'])[3]").selectOption({index:5})
})
//index starts from1

test("multiselect dropdown", async({page})=> {
await page.goto("https://demoapps.qspiders.com/ui/dropdown/multiSelect?sublist=1")
await page.locator("#select-multiple-native").selectOption([{value: "Mens Casual Premium Slim Fit T-Shirts "},{value: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"}])
//select multiple option through value

//await page.getByTitle("Mens Cotton Jacket", {exact:true}).click()
//await page.keyboard.press("Shift+ArrwDown")
//await page.keyboard.press("Shift+ArrwDown")

await page.getByRole("button", {name:"Add"}).click()

})
test("custom dropdown", async({page})=> {
await page.goto("https://www.amazon.com/s?k=shoes&crid=2EZ9C83QSPSTJ&sprefix=shoes%2Caps%2C337&ref=nb_sb_noss_1")

await page.locator("#s-result-sort-select").click({force:true})

await page.locator('//a[@class="a-dropdown-link"]').first().waitFor()

let options= await page.locator('//a[@class="a-dropdown-link"]').all()

for(let option of options)
{
   let text= await option.textContent
}


})
 test("autosuggest dropdown", async({page})=> {
  await page.goto("https://www.amazon.com/")
  await page.getByPlaceholder("Search Amazon", {exact:true}).fill("shoes")
  
  await page.locator('//div[@role="row"]').first().waitFor()

  //case 1
  let allautosuggestion= await page.locator('//div[@role="row"]').all()

  for(let option of allautosuggestion)
  {
    let text=await option.textContent()
    if(text?.includes(" rack"))
    {
        await option.click()
        break;
    }
  }
  /*
  //case2
  await page.keyboard.press("ArrowDown")
  await page.keyboard.press("ArrowDown")
  await page.keyboard.press("ArrowDown")
  await page.keyboard.press("ArrowDown")
  await page.keyboard.press("Enter")
*/
 })
test.only("check drp", async({page})=> {

 await page.goto("https://demoqa.com/automation-practice-form")
    

 //select State and city
    await page.locator('#react-select-3-input').click()
    await page.getByText('Haryana', {exact:true}).click()
    
    await page.locator("#react-select-4-input").click()
    await page.getByText('Panipat', {exact: true}).click()
   
    
// auto suggestion dropdown
await page.locator("#subjectsInput").fill("a")
let subjects = await page.locator(".subjects-auto-complete__option css-10wo9uf-option").all()

for (let option of subjects)
   {
     let subjectName = await option.textContent();

     if(subjectName?.includes("Arts"))
     {
      await option.click();
      break;
     }

   }
  

})