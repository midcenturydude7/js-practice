/*
Create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.
*/

const filterList = (arr) => {
  return arr.filter((i) => typeof i == "number");
};

console.log(filterList([1, 2, "a", "b"])); // [1, 2]
