/*
Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1. (81-1-1-81)

Example #2: An input of 765 will/should return 493625 because 72 is 49, 62 is 36, and 52 is 25. (49-36-25)

Note: The function accepts an integer and returns an integer.
*/

const squareDigits = (num) => {
  return [...String(num)].map((dig) => dig * dig).join("");
};

console.log(squareDigits(9119)); // 811181
console.log(squareDigits(765)); // 493625

// Verbose version
const squareDigitsVerbose = (num) => {
  const numToString = String(num);
  const numToArray = [...numToString];
  const squaredArray = numToArray.map((dig) => dig * dig);
  const squaredString = squaredArray.join("");
  return squaredString;
};

console.log(squareDigitsVerbose(9119)); // 811181

// Create a function that takes a five digit number and squares each digit and returns a new number with the squared digits in the same order
const squareDigitsVerbose2 = (num) => {
  const numToString = String(num);
  const numToArray = [...numToString];
  const squaredArray = numToArray.map((dig) => dig * dig);
  const squaredString = squaredArray.join("");
  return Number(squaredString);
};

// Short version
const squareDigitsShort = (num) => {
  return Number([...String(num)].map((dig) => dig * dig).join(""));
};
