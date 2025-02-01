/*
Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n (inclusive).
*/

const powersOfTwo = (n) => {
  const result = [];
  for (let i = 0; i <= n; i++) {
    result.push(2 ** i);
  }
  return result;
};

console.log(powersOfTwo(0)); // [1]
console.log(powersOfTwo(1)); // [1, 2]
console.log(powersOfTwo(4)); // [1, 2, 4, 8, 16]
