/*
You are going to be given a non-empty string. Your job is to return the middle character(s) of the string.

- If the string's length is odd, return the middle character.
- If the string's length is even, return the middle 2 characters.
*/

// Ternary operator
const getMiddle = (s) => {
  const middle = Math.floor(s.length / 2);
  return s.length % 2 === 0 ? s[middle - 1] + s[middle] : s[middle];
};

console.log(getMiddle("test")); // es

// Verbose example
const getMiddle2 = (s) => {
  const middle = Math.floor(s.length / 2);
  if (s.length % 2 === 0) {
    return s[middle - 1] + s[middle];
  } else {
    return s[middle];
  }
};

console.log(getMiddle2("testy")); // s

// Using slice
const getMiddle3 = (s) => {
  const middle = Math.floor(s.length / 2);
  return s.length % 2 === 0 ? s.slice(middle - 1, middle + 1) : s[middle];
};

console.log(getMiddle3("testing")); // t

// For loop
const getMiddle4 = (s) => {
  const middle = Math.floor(s.length / 2);
  let result = "";
  for (let i = 0; i < s.length; i++) {
    if (s.length % 2 === 0) {
      if (i === middle - 1 || i === middle) {
        result += s[i];
      }
    } else {
      if (i === middle) {
        result += s[i];
      }
    }
  }
  return result;
};

console.log(getMiddle4("testing")); // t

// Substring
const getMiddle5 = (s) => {
  const middle = Math.floor(s.length / 2);
  return s.length % 2 === 0 ? s.substring(middle - 1, middle + 1) : s[middle];
};

console.log(getMiddle5("testing")); // t
