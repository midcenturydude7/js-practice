/*
Build a function that returns an array of integers from n to 1 where n>0.
*/

// Solution 1: For Loop
const reverseSeq = (n) => {
  let result = [];
  for (let i = n; i > 0; i--) {
    result.push(i);
  }
  return result;
};

console.log(reverseSeq(5)); // [5, 4, 3, 2, 1]

// Solution 2: Array.from() Method
const reverseSeq2 = (n) => {
  return Array.from({ length: n }, (_, i) => n - i);
};

console.log(reverseSeq2(5)); // [5, 4, 3, 2, 1]
