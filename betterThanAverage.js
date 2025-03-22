/*
There was a test in your class and you passed it. Congratulations!

But you're an ambitious person. You want to know if you're better than the average student in your class.

You receive an array with your peers' test scores. Now calculate the average and compare your score!

Return true if you're better, else false!

Note:
Your points are not included in the array of your class's points. Do not forget them when calculating the average score!
*/

const betterThanAverage = (classPoints, yourPoints) => {
  const totalPoints = classPoints.reduce((acc, score) => acc + score, 0);
  const average = totalPoints / classPoints.length;
  return yourPoints > average;
};

console.log(betterThanAverage([2, 3], 5)); // true
console.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75)); // true
console.log(betterThanAverage([70, 65, 80, 90], 85)); // true
