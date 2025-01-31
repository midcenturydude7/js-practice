/*
Bob needs a fast way to calculate the volume of a cuboid with three values: the length, width and height of the cuboid. Write a function to help Bob with this calculation.
*/

const cuboidCalc = (l, w, h) => {
  const volume = l * w * h;
  const surfaceArea = 2 * (l * w + w * h + h * l);
  return { volume, surfaceArea };
};

console.log(cuboidCalc(1, 2, 3)); // { volume: 6, surfaceArea: 22 }
