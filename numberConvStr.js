/*
When provided with a number between 0-9, return it in words. Note that the input is guaranteed to be within the range of 0-9.
*/

const numberConvStr = (num) => {
  const numStr = {
    0: "zero",
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
  };
  return numStr[num];
};

console.log(numberConvStr(9)); // "nine"
