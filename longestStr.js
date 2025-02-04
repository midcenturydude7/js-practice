/*
Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string (alphabetical ascending), the longest possible, containing distinct letters - each taken only once - coming from s1 or s2
*/

// Solution 1: Using Set, Sort, and Join Methods
const longestStr = (s1, s2) => {
  return [...new Set(s1, s2)].sort().join("");
};

// Solution 2: Verbose Solution
const longestStr2 = (s1, s2) => {
  let str = s1 + s2;
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (!result.includes(str[i])) {
      result += str[i];
    }
  }
  return result.split("").sort().join("");
};

console.log(longestStr("xyaabbbccccdefww", "xxxxyyyyabklmopq")); // "abcdefklmopqwxy"
console.log(longestStr2("xyaabbbccccdefww", "xxxxyyyyabklmopq")); // "abcdefklmopqwxy"

