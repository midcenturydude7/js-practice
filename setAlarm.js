/*
Write a function setAlarm which receives two parameters. The first parameter, employed, is true whenever you are employed and the second parameter, vacation is true whenever you are on vacation.
*/

const setAlarm = (employed, vacation) => employed && !vacation;

console.log(setAlarm(true, true)); // false
console.log(setAlarm(true, false)); // true
