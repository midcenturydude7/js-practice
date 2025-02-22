/*
Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

Example (Input => Output):
35231 => [1,3,2,5,3]
0     => [0]
*/

const digitize = (n) => {
  return [...String(n)].reverse().map(Number);
};

console.log(digitize(35231)); // [1,3,2,5,3]

const digitize2 = (n) => [...String(n)].reverse().map(Number);

console.log(digitize2(0)); // [0]
console.log(digitize2(35231)); // [1,3,2,5,3]
