/*
Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.
*/

// Verbose example
const getCount = (str) => {
  const vowels = "aeiou";
  let count = 0;

  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }

  return count;
};

console.log(getCount("abracadabra")); // 5

// Shortest example
const getCount2 = (str) => {
  return str.split("").filter((char) => "aeiou".includes(char)).length;
};

console.log(getCount2("abracadabra")); // 5
