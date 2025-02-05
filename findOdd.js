/*
Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times.
*/

// Working with forEach method
const findOdd = (num) => {
  let obj = {};
  num.forEach((n) => {
    obj[n] = obj[n] ? obj[n] + 1 : 1;
  });

  for (let key in obj) {
    if (obj[key] % 2 !== 0) {
      return parseInt(key);
    }
  }
};

console.log(findOdd([1, 1, 2, 2, 3, 3, 3])); // 3

// Working with reduce method
const findOdd2 = (num) => {
  const countObj = num.reduce((acc, cur) => {
    acc[cur] = acc[cur] ? acc[cur] + 1 : 1;
    return acc;
  }, {});

  for (let key in countObj) {
    if (countObj[key] % 2 !== 0) {
      return parseInt(key);
    }
  }
};

console.log(findOdd2([1, 1, 2, 2, 3, 3, 3])); // 3

// Working with filter method
const findOdd3 = (num) => {
  return num.filter((n) => num.filter((m) => m === n).length % 2 !== 0)[0];
};

console.log(findOdd3([1, 1, 2, 2, 3, 3, 3])); // 3

// Working with special bitwise operator
const findOdd4 = (num) => {
  return num.reduce((acc, cur) => acc ^ cur);
};

console.log(findOdd4([1, 1, 2, 2, 3, 3, 3])); // 3
