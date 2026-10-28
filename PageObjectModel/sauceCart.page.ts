import { Locator, Page } from "@playwright/test";


export class cart{
    page: Page
    cartProduct : Locator

 constructor(page:page)
 {
    this.page = page
    this.cartProduct = page.locator(".inventory_item_name")
 }



}