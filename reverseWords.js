/*
Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

Examples
"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps"
*/

const reverseWords = (str) => {
  return str
    .split(" ")
    .map((word) => word.split("").reverse().join(""))
    .join(" ");
};

console.log(reverseWords("This is an example!")); // "sihT si na !elpmaxe"
console.log(reverseWords("double  spaces")); // "elbuod  secaps"

// With [..str] as a string is an array of characters
const reverseWords2 = (str) => {
  return [...str].reverse().join("").split(" ").reverse().join(" ");
};

console.log(reverseWords2("This is an example!")); // "sihT si na !elpmaxe"
console.log(reverseWords2("double  spaces")); // "elbuod  secaps"
