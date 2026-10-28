import {test, expect} from '@playwright/test'

test("auto-retrying assertion", async({page})=> {

await page.goto("https://demoapps.qspiders.com/ui?scenario=1")
//validate url
await expect(page).toHaveURL("https://demoapps.qspiders.com/ui?scenario=1")
//valify title
await expect(page).toHaveTitle("DemoApps | Qspiders | Text Box")

//toBeVisible()
await expect(page.getByPlaceholder("Enter your name",{exact:true})).toBeVisible()

await page.getByPlaceholder("Enter your name",{exact:true}).fill("Hiya")

await expect(page.getByPlaceholder("Enter your name",{exact:true})).toHaveValue("Hiya")
//tohavetext method
await expect(page.locator("//h1[text()='Register']")).toHaveText("Register")

//screenshot
//await page.screenshot({path: "screenshot/ss1.png"})
//await expect(page).toHaveScreenshot("screenshot/ss1.png")

})

test("non retrying assertion", async({page})=> {
   
    await page.goto("https://demoapps.qspiders.com/ui?scenario=1")

    let text=await page.locator("//h1[text()='Register']").textContent();
    await expect.soft(text).toBe("Register")

    let title=await page.title()
    let url=await page.url()

    await expect(title).toContain("DemoApps | Qspiders ")
    await expect(url).toMatch(/scenario=1/)

    let status="hi"
    await expect(status).toBeTruthy()

    //let name="hello"
    //await expect(name).toBeUndefined() 

})
test("assymetric matcher", async({page})=> {
   
    await page.goto("https://demoapps.qspiders.com/ui?scenario=1")
   
    let text = await page.locator('//button').textContent();

    expect(text).toEqual(expect.stringContaining("Regis"))
    //used to check whether a string contains a specified substring

    //expect(text).toEqual("Regis")
    
    expect(text).toEqual(expect.stringMatching(/Register/))
    //used to check whether a string contains a specified substring or regular expression

    const products = ["laptop", 'mobile', 'mouse']
    expect(products).toEqual(expect.arrayContaining(["laptop", "mouse"]))
    //checks whether an array contains the specified elements

    const user={
        name: "john",
        age: 25,
        city: "Bangalore"
    }
    expect(user).not.toEqual(expect.objectContaining({
        name:"john",
        age: 27
    })) //check whether an onject contain the specified properties'

    //expect.anything()
    //matches any value expect null and undefined
    let a=true;
    expect(a).toEqual(expect.anything())

    const user1={
        name: "john",
        age: 25,
    }
    expect(user1).toEqual({
        name:expect.anything(),
        age:expect.anything(),
    })

    //expect.any()
    //matches any value of a specified datatype

     expect(user1).toEqual({
        name:expect.any(String),
        age:expect.any(Number),
    })
    let stud = true
    expect(stud).toEqual(expect.any(Boolean))
})

test.only("poll assertion", async({page}) =>{
await page.goto("https://demoapps.qspiders.com/ui?scenario=1")
await expect.poll(async() => {
return await page.title()

}, "poll assertion").toContain("Demo")


})