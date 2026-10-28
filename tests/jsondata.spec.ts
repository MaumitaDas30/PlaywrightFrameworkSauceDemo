import {test} from '@playwright/test'

//import data from "../DDT/jsondata.json"
//import value from "../DDT/jsondata1.json"
import value from "../DDT/jsondata2.json"

/*
test("Single set", async()=> {
//console.log(data.greet);
//console.log(data.subject);
})

//test("multiple json object in array", async()=> {
 data.forEach((d) => {
    //console.log(d.greet);
 })

})
 
test("for application -> single set of data", async({page})=> {
await page.goto(value.url)
await page.getByLabel("Username",{exact:true}).fill(value.username)
await page.getByLabel("Password",{exact:true}).fill(value.password)

await page.getByRole("button", {name:"Submit", exact:true}).click()
})


test.only("for application -> multiple set of data", async({page})=> {

for(let testdata of value) {
    let url= testdata.url
    let username= testdata.username
    let password= testdata.password

await page.goto(url)
await page.getByLabel("Username",{exact:true}).fill(username)
await page.getByLabel("Password",{exact:true}).fill(password)

await page.getByRole("button", {name:"Submit", exact:true}).click()
}
})
*/
test("for application -> valid set of data", async({page})=> {

for(let testdata of value.valid) {
    let url= testdata.url
    let username= testdata.username
    let password= testdata.password

await page.goto(url)
await page.getByLabel("Username",{exact:true}).fill(username)
await page.getByLabel("Password",{exact:true}).fill(password)

await page.getByRole("button", {name:"Submit", exact:true}).click()
}
})
test("for application -> invalid set of data", async({page})=> {

for(let testdata of value.invalid) {
    let url= testdata.url
    let username= testdata.username
    let password= testdata.password

await page.goto(url)
await page.getByLabel("Username",{exact:true}).fill(username)
await page.getByLabel("Password",{exact:true}).fill(password)

await page.getByRole("button", {name:"Submit", exact:true}).click()
}
})
