/*
Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

Mind the input validation.
*/

const sumArray = (array) => {
  if (array == null || array.length < 3) return 0;
  return array
    .sort((a, b) => a - b)
    .slice(1, -1)
    .reduce((a, b) => a + b, 0);
};

console.log(sumArray([6, 2, 1, 8, 10])); // 16

const sumArray2 = (array) => {
  return Array.isArray(array) && array.length > 1
    ? array.reduce((a, b) => a + b, 0) - Math.min(...array) - Math.max(...array)
    : 0;
};

console.log(sumArray2([6, 2, 1, 8, 10])); // 16
