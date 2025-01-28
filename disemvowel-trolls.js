/*
Trolls are attacking your comment section!

A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

Your task is to write a function that takes a string and return a new string with all vowels removed.

For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

Note: For this function, the letter y is not considered a vowel.
*/

// Long Verbose Example
function disemvowel(str) {
  const vowels = ["a", "e", "i", "o", "u"];
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (!vowels.includes(str[i].toLowerCase())) {
      result += str[i];
    }
  }
  return result;
}

console.log(disemvowel("This website is for losers LOL!")); // "Ths wbst s fr lsrs LL!"

// Shortland Example
const disemvowelTrolls = (str) => str.replace(/[aeiou]/gi, "");

console.log(disemvowelTrolls("This website is for losers LOL!")); // "Ths wbst s fr lsrs LL!"

// Shorthand example with filter method
function disemvowelFilter(str) {
  return str
    .split("")
    .filter((char) => !vowels.includes(char.toLowerCase()))
    .join("");
}
