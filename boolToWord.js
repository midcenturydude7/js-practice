/*
Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.
*/

// Ternary operator
const boolToWord = (bool) => {
  return bool ? "Yes" : "No";
};

console.log(boolToWord(true)); // Yes

// Verbose example
const boolToWord2 = (bool) => {
  if (bool) {
    return "Yes";
  } else {
    return "No";
  }
};

console.log(boolToWord2(false)); // No

// Shortest example
const boolToWord3 = (bool) => (bool ? "Yes" : "No");

console.log(boolToWord3(true)); // Yes
