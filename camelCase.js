/*
Complete the solution so that the function will break up camel casing, using a space between words.
*/

// Regular Expression Solution
const camelCase = (str) => {
  return str.replace(/([A-Z])/g, " $1");
};

// For Loop Solution
const camelCase2 = (str) => {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i].toUpperCase()) {
      result += " " + str[i];
    } else {
      result += str[i];
    }
  }
  return result;
};

// Split and Join Solution
const camelCase3 = (str) => {
  return str.split(/(?=[A-Z])/).join(" ");
};

// Split and Join without Regex Solution
const camelCase4 = (str) => {
  return str
    .split("")
    .map((char) => {
      if (char === char.toUpperCase()) {
        return " " + char;
      } else {
        return char;
      }
    })
    .join("");
};

// Complete the solution to ensure each method has a comment explaining its purpose.
const camelCase5 = (str) => {
  return str.split(/(?=[A-Z])/).join(" ");
};

console.log(camelCase("camelCasing")); // camel Casing
console.log(camelCase2("camelCasing")); // camel Casing
console.log(camelCase3("camelCasing")); // camel Casing
console.log(camelCase4("camelCasing")); // camel Casing
