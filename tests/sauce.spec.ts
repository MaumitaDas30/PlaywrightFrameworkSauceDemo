import {test, expect} from "@playwright/test";
import {sauceLogin} from "../PageObjectModel/sauce.page";
import {ProductList} from "../PageObjectModel/sauceProductList.page";
import {cart} from "../PageObjectModel/sauceCart.page"
test("Sauce app test", async ({page})=> {

//creating object for pom class
    let loginPage = new sauceLogin(page);
    await loginPage.openUrl();
    await loginPage.loginMethod();

    await expect(await page).toHaveURL('https://www.saucedemo.com/inventory.html');
   
    let productlistpage = new ProductList(page)
    await productlistpage.clickAddtoCart();
    await productlistpage.clickCartIcon();

    let cartpage = new cart(page)
    let text = await cartpage.cartProduct.textContent()
    console.log(text)
    expect (text).toContain("Sauce Labs Backpack")
    
})