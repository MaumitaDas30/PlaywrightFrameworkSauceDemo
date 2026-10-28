import {test} from "@playwright/test"

import {getRandomNumber, getRandomString} from "../utility/randomNumber"
import {getCurrentDate, getTimestamp, getDate} from "../utility/randomNumber"

test("randomNumber", async () => {

 let data = await getRandomNumber(500, 1000)
 console.log(data);

 let data2=getRandomString(5)
 console.log(data2+"@gmail.com");


 let date = getCurrentDate()

console.log(date);

let timestamp = getTimestamp()
console.log(timestamp);
console.log(getDate(5));

})