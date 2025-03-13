/*
You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

Note: you will always receive a valid array containing a random assortment of direction letters ('n', 's', 'e', or 'w' only). It will never give you an empty array (that's not a walk, that's standing still!).

Describe this function: isValidWalk -- it takes an array of strings as an argument and returns a boolean value. It checks if the array has a length of 10 and if the number of "n" is equal to the number of "s" and the number of "e" is equal to the number of "w". If all these conditions are met, the function returns true; otherwise, it returns false.
*/

const isValidWalk = (walk) => {
  if (walk.length !== 10) return false;
  let n = 0,
    s = 0,
    e = 0,
    w = 0;
  walk.forEach((direction) => {
    if (direction === "n") n++;
    if (direction === "s") s++;
    if (direction === "e") e++;
    if (direction === "w") w++;
  });
  return n === s && e === w;
};
