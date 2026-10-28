export async function getRandomNumber(
    min:number,
    max:number
) {
    return Math.floor(Math.random()* (max-min+1)) +min
}
 
/* 
Math.random() --> generate a random number //0.1234

Math.random() generate the random decimal number greater than or equal to 0 and less than 1

example: 0.1234, 0.56789

max-min+1 --> 10- 5+1
multiply (math.random * max-min+1)

Math.floor() --> rounds the number to the nearst integer

*/

export function getRandomString(
    length : number
){
    return Math.random().toString(36).substring(2, 2+length)
}

/*
Math.random() generate the random decimal number greater 
than or equal to 0 and less than 1

toString() --> convert the number into the base 36 string using digits and letters

substring(startindex, endindex) --> extract the portion of the string

startindex: the index from which the extraction begins
endIndex: the index where the extraction stops

*/

export function getCurrentDate(){
    return new Date().toISOString().split("T")[0]
}

/*
new Date() --> it will represent the current moment
example October 23, 2026, 11:00 AM

toISOString() --> conver the date into a standardized UTC
(coordinatated Universal Time) date-time string

//timestamp --> is a number that represents a specific point in time
usually represents the number of milliseconds since 1 Jan, 
1970 at 12:00 UTC // starting point is called as unix epoch
//
*/
export function getTimestamp(){
    return Date.now()
}

export function getDate(
    days:number   //2
){
    let date = new Date()
    date.setDate(date.getDate()+days)   //
    return date.toISOString().split("T")[0]
}

/*
getDate() --> return the day of the month
ex --> today --> October 23 --> return 23

setDate() --> update the day of the month

*/