/*
Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.
*/

// Short solution

const descendingOrder = (n) => {
  if (n >= 0 && Number.isInteger(n))
    return parseInt([...String(n)].sort((a, b) => b - a).join(""));
  else return "Input must be a non-negative integer";
};

// Verbose solution
const descendingOrder2 = (n) => {
  let arr = [...String(n)];
  arr.sort((a, b) => b - a);
  return parseInt(arr.join(""));
};

// const validateInput = (n) => {
//   if (n < 0 || !Number.isInteger(n)) {
//     throw new Error("Input must be a non-negative integer");
//   }
// };

console.log(descendingOrder(123456789)); // 987654321
console.log(descendingOrder2(123456789)); // 987654321
console.log(descendingOrder("a")); // 0
console.log(descendingOrder(-1)); // "Input must be a non-negative integer"
