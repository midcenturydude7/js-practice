/*
Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.
*/

// Solution 1: Reg Epression
const XO = (str) => {
  let x = str.match(/x/gi) || [];
  let o = str.match(/o/gi) || [];
  return x.length === o.length;
};

// Solution 2: For Loop
const XO2 = (str) => {
  let x = 0;
  let o = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i].toLowerCase() === "x") {
      x++;
    } else if (str[i].toLowerCase() === "o") {
      o++;
    }
  }
  return x === o;
};

// Solution 3: Reduce Method
const XO3 = (str) => {
  return (
    str.split("").reduce((acc, cur) => {
      if (cur.toLowerCase() === "x") {
        acc++;
      } else if (cur.toLowerCase() === "o") {
        acc--;
      }
      return acc;
    }, 0) === 0
  );
};

// Solutions 4: Filter Method
const XO4 = (str) => {
  const x = str.split("").filter((char) => char.toLowerCase() === "x").length;
  const o = str.split("").filter((char) => char.toLowerCase() === "o").length;
  return x === o;
};

// Solution 5: Split Method
const XO5 = (str) => {
  return (
    str.toLowerCase().split("x").length === str.toLowerCase().split("o").length
  );
};

console.log(XO("ooxx")); // true
console.log(XO2("ooxx")); // true
console.log(XO3("ooxx")); // true
console.log(XO4("ooxx")); // true
console.log(XO5("ooxx")); // true
