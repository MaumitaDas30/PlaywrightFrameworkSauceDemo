test("typescript Utility", async() => {

    let date = await getRandomNumber(5000000, 1000000)
    console.log(date)

    let data2 = getRandomString(5)
    console.log(data2+"@gmail.com")
})

let date = getCurrentDate()

console.log(date);

let timestamp = getTimestamp()
console.log(timestamp);
console.log(getDate(5));