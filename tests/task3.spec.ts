import {test, expect} from '@playwright/test'

test ("testcase1", async({page})=> {
  //1. open http://Amazon.in application,search for samsung phones,
  // write a xpath to find price of the 1st samsung phone.
  //done
  
    const pageUrl=await page.goto("http://Amazon.in")
  await page.getByRole('searchbox', {name:"Search Amazon.in"}).fill("samsung phones")
  await page.locator("#nav-search-submit-button").click()
  const price= await page.locator("(//div[@class='a-section a-spacing-small a-spacing-top-small'])[1]//following-sibling::span[@class='a-price-whole']").textContent()
  console.log(price)

})

test("testcase2", async({page})=> {
//2. open http://Amazon.in application,search for phones,in the left side of the page you
//  can operating system,write a xpath to click on a checkBox for (Android 13.0)
//not done

await page.goto("http://Amazon.in")
await page.getByRole('searchbox', {name:"Search Amazon.in"}).fill("phones")
await page.locator("#nav-search-submit-button").click()

//in the left side of the page you
//  can operating system,write a xpath to click on a checkBox for (Android 13.0)
await page.locator("//div[@class='a-checkbox a-checkbox-fancy s-navigation-checkbox aok-float-left']//following-sibling::span[text()='Android 13.0']").check()
await page.close()

})

test("testcase3", async({page})=> {
//Testcase3: Open cricbuzz application, click on live match,click on scoreCard,
//write a xpath to find Runs scored by a perticular batsman.
//done
await page.goto("https://www.cricbuzz.com/")

//clicking live Score
await page.getByRole('link', {name:'Live Scores'}).click()

//click on 1st live matches Scorecard
page.locator("//span[text()='Scorecard']").first().click()

//write a xpath to find Runs scored by a perticular batsman.
page.locator("(//span[text()='Tim Seifert (wk)']/ancestor::div[@class='flex flex-col gap-1 tb:flex-row tb:justify-between wb:flex-row wb:justify-between']/following-sibling::div)[1]")

})

test("testcase4", async({page})=> {
//4. open iccCricketRankings, go to (Men's Batting Rankings)section,
//write a xpath to find a rating of player(David Warner).

await page.goto("https://www.icc-cricket.com/rankings")

//go to (Men's Batting Rankings)section
await page.locator("//a[@text='mens-batting-rankings']").click()

//write a xpath to find a rating of player(Virat Kohli)
let name = "Steve"
let rating= await page.textContent(`//span[text()="${name}"]/ancestor::td[@class='w-[calc(100%-110px)] align-middle']/preceding-sibling::td//span[@class="text-xs font-extrabold uppercase text-primary pr-2"]`)
console.log(rating)

})

test("testcase5", async({page})=> {

//5. open LensKart application, mouseOverOn StoreLocator, 
// write a xpath to locate (Bangalore)
//done
await page.goto("https://www.lenskart.com/")

//mouseOverOn StoreLocator
await page.getByLabel("STORES").hover()
await page.locator("//img[@src='https://static5.lenskart.com/media/uploads/bengalore-210126.png']").click()
})

test("testcase6", async({page})=> {
//6. open flipkart and locate CART without using visible Text().
//done
await page.goto("https://www.flipkart.com/")
//const cart= page.locator("//span[@class='v1zwn28']/parent::a[@title='Cart]").click()
const cart= page.locator("//span[normalize-space()='Cart']")
await expect(cart).toHaveText("Cart")
})


test("testcase7", async({page})=> {
//7. Go to makeMyTrip application, go to departure, write a xpath to select date,
//  of month January 2024  (24)
await page.goto("https://www.makemytrip.com/")
//go to departure
await page.locator("//label[@for='departure']").click()

//write a xpath to select date of month January 2026  (24)
//page.locator("//div[(@class='DayPicker-Day') and @aria-label='Tue Oct 06 2026']").click()
//select date from different month
/*
await page.locator("//span[@aria-label='Next Month']").click()
await page.locator("//span[@aria-label='Next Month']").click()
await page.locator("//span[@aria-label='Next Month']").click()
*/
let nextmonth=await page.locator("//span[@aria-label='Next Month']")
for(let i=0; i<3; i++)
{
  await nextmonth.click();
}
await page.locator("//div[@class='DayPicker-Day' and @aria-label='Tue Jan 12 2027']").click()
})



test("testcase9", async({page})=> {
//9. open http://amazon.in, mouseover on Accounts & Lists and write a xpath for signInBtn.
//done
await page.goto("https://www.amazon.com/")

//mouseOverOn Accounts & Lists
await page.locator("//span[@class='nav-line-2 ']").hover()

const signin= await page.locator("//span[text()='Sign in']").first().click()
//const text=signin.textContent()
//console.log(text)
})

test("testcase10", async({page})=> {
//10. open clinique website and inspect bag icon 
//done
await page.goto("https://www.clinique.com/")

//inspect bag icon
await page.locator("//*[name()='svg' and @class='header-gnav-cart__icon svgicon svgicon--bag hide_auth']").click()

})
test("testcase11", async({page})=> {
//11. open http://Amazon.in application,search for books,locate t he 7th book price and name


await page.goto("http://Amazon.in")

//search for books
await page.getByPlaceholder("Search Amazon.in", {exact:true}).fill("books")

//click on search button
await page.locator("#nav-search-submit-button"). click()

/*
//locate 7th product
let productname= page.locator("(//div[@class='a-section a-spacing-none puis-padding-right-small s-title-instructions-style puis-desktop-list-title-instructions-style']//h2//span)[position()=7]")

//console.log("The 7th product name is: ",await productname.textContent())
let seventhproduct = page.locator("//div[@class='a-section a-spacing-none puis-padding-right-small s-title-instructions-style puis-desktop-list-title-instructions-style']").nth(7)

//let productname = seventhproduct.locator("h2 span").textContent()
*/ 
// this is the ai script
/* Wait for search results to load
  await page.waitForSelector('div.s-result-item[data-component-type="s-search-result"]');

  // Extract the first product name and price
  const firstProduct = await page.locator('div.s-result-item[data-component-type="s-search-result"]').nth(7);
  
  const productName = await firstProduct.locator('h2 span').textContent();
  // Amazon often stores the price whole and fraction separately or inside .a-price-whole
  const productPrice = await firstProduct.locator('.a-price .a-offscreen').nth(7).textContent();

  console.log('Product Name:', productName);
  console.log('Product Price:', productPrice);
*/
// Extract the 7th product name and price
const productname= await page.locator("(//div[@class='a-section a-spacing-small a-spacing-top-small'])[position()=6]//a//h2//span").textContent()
console.log("seventh product name is: ",productname)

// Extract the 7th product price
const productprice= await page.locator("(//div[@class='a-section a-spacing-small a-spacing-top-small'])[6]//following-sibling::span//span[@class='a-price-whole']").first().textContent()
console.log("seventh product price is: ",productprice)
})

test.only("testcase12", async({page})=> {
//11. open https://www.flipkart.com/ application,search for shoes
await page.goto("https://www.flipkart.com/")

//search for shoes
await page.locator("//input[@class='nw1UBF v1zwn26']").first().fill("shoes")
await page.keyboard.press("Enter")

//click on search button
//await page.locator("and text()='Search Icon'"). click()
await page.locator('//img[@class="MZeksS"]').first().click()



})