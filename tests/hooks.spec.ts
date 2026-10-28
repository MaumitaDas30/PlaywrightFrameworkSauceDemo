import {test} from "@playwright/test"


test("test1", async()=> {
console.log('add user');
})

test("test2", async()=> {
console.log('edit user');
})

test("test3", async()=> {
console.log('delete user');
})

test.beforeAll(async()=> {
    console.log("read excel");
    console.log("connect to Database")
    console.log("generate")
    console.log("read config file")

})

test.afterAll(async()=> {
    console.log("disconnect to Database")
    console.log("delete data")
    console.log("generate Html data")
    console.log("close the external resource")
})

test.beforeEach(async({page})=> {
    console.log("launch browser");
    console.log("launch url")
    console.log("login")
    await page.goto("https://www.amazon.com/")

})

test.afterEach(async()=> {
    console.log("lgout")
    console.log("close browser manually")
    console.log("screenshot after failure")
    console.log("clear")
})

/*
 beforeAll()

 beforeEach()
 testscript1
 afterEach()

 beforeEach()
 testscript2
 afterEach()

 beforeEach()
 testscript3
 afterEach()

 beforeEach()
 testscript4
 afterEach()

 afterAll()

*/