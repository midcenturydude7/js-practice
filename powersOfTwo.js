/*
Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n (inclusive).
*/

// Using for loop
const powersOfTwo2 = (n) => {
  const result = [];
  for (let i = 0; i <= n; i++) {
    result.push(2 ** i);
  }
};

// Working with Array.from method to create a range method
const powersOfTwo = (n) => {
  return Array.from({ length: n + 1 }, (_, i) => 2 ** i);
};

console.log(powersOfTwo(0)); // [1]
console.log(powersOfTwo(1)); // [1, 2]
console.log(powersOfTwo(4)); // [1, 2, 4, 8, 16]
