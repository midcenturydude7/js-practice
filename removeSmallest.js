/*
Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with the lowest index. If you get an empty array/list, return an empty array/list.

Don't change the order of the elements that are left.
*/

const removeSmallest = (numbers) => {
  const min = Math.min(...numbers);
  return numbers.filter((num, idx) => idx !== numbers.indexOf(min));
};

console.log(removeSmallest([1, 2, 3, 4, 5])); // [2, 3, 4, 5]

// Working with filter method
const numbers = [1, 2, 3, 4, 5];
const result = numbers.filter((num, idx) => {
  if (num > 3 && idx > 2) {
    console.log(`num: ${num}, idx: ${idx}`);
    return true;
  }
  return false;
});

console.log(result); // [4, 5]
