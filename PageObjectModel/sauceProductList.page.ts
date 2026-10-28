import {Page, Locator} from "@playwright/test"

export class ProductList 
{
    page :Page
    BtnAddtocart : Locator
    iconShoppingCartBadge : Locator
    iconAddtocart :Locator


 constructor (page : Page)
 {
    this.BtnAddtocart = page.locator('#add-to-cart-sauce-labs-backpack')
    this.iconAddtocart = page.locator(".shopping_cart_link")
    this.iconShoppingCartBadge = page.locator(".shopping_cart_badge")

 }

 async clickAddtoCart()
 {
    await this.BtnAddtocart.click()
 }
async clickCartIcon()
{
    await this.iconAddtocart.click()
}

}