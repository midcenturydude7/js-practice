/*
You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

[]                                -->  "no one likes this"
["Peter"]                         -->  "Peter likes this"
["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
Note: For 4 or more names, the number in "and 2 others" simply increases.
*/

// Verbose example
const likes = (names) => {
  if (names.length === 0) {
    return "no one likes this";
  } else if (names.length === 1) {
    return `${names[0]} likes this`;
  } else if (names.length === 2) {
    return `${names[0]} and ${names[1]} like this`;
  } else if (names.length === 3) {
    return `${names[0]}, ${names[1]} and ${names[2]} like this`;
  } else {
    return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
  }
};

console.log(likes([])); // "no one likes this"

// Shorter example
const likes2 = (names) => {
  return {
    0: "no one likes this",
    1: `${names[0]} likes this`,
    2: `${names[0]} and ${names[1]} like this`,
    3: `${names[0]}, ${names[1]} and ${names[2]} like this`,
    4: `${names[0]}, ${names[1]} and ${names.length - 2} others like this`,
  }[Math.min(4, names.length)];
};

console.log(likes2([])); // "no one likes this"
console.log(likes2(["Peter"])); // "Peter likes this"
console.log(likes2(["Jacob", "Alex"])); // "Jacob and Alex like this"
console.log(likes2(["Max", "John", "Mark"])); // "Max, John and Mark like this"
console.log(likes2(["Alex", "Jacob", "Mark", "Max"])); // "Alex, Jacob and 2 others like this"
console.log(likes2(["Alex", "Jacob", "Mark", "Max", "Steve"])); // "Alex, Jacob and 3 others like this"

// One-liner
const likes3 = (names) =>
  ({
    0: "no one likes this",
    1: `${names[0]} likes this`,
    2: `${names[0]} and ${names[1]} like this`,
    3: `${names[0]}, ${names[1]} and ${names[2]} like this`,
    4: `${names[0]}, ${names[1]} and ${names.length - 2} others like this`,
  }[Math.min(4, names.length)]);

console.log(likes3([])); // "no one likes this"
console.log(likes3(["Peter"])); // "Peter likes this"
console.log(likes3(["Jacob", "Alex"])); // "Jacob and Alex like this"
console.log(likes3(["Max", "John", "Mark"])); // "Max, John and Mark like this"
console.log(likes3(["Alex", "Jacob", "Mark", "Max"])); // "Alex, Jacob and 2 others like this"
console.log(likes3(["Alex", "Jacob", "Mark", "Max", "Steve"])); // "Alex, Jacob and 3 others like this"
