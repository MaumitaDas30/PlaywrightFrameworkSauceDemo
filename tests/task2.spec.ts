import {test} from '@playwright/test';

test("tokyo olympics testcase", async({page})=> {
    
    //open the url
    await page.goto("https://www.olympics.com/en/olympic-games/tokyo-2020/medals")
    
        //click on athletes
    await page.getByRole('link',{name:'Athletes'}).click();
     
    //click on athletes
    const Emma= page.locator("//li[@data-cy='athlete-row']").filter({hasText:'Emma MCKEON'})

    const goldMedals= await Emma.locator("//span[@data-cy='ocs-text-module']/ancestor::div[@data-medal-id='gold-medals-2']").innerText()

    console.log(goldMedals)



test("testcase8", async({page})=> {
//8. search for tokyo olympics, select the 1st link, scroll till (Featured Athletes),
// click on All Athletes,go to Medalists,write a xpath to find 
//Number of Gold medals won by (Emma Mckeon).

})



})