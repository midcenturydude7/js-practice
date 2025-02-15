/*
You are going to be given an array of integers. Your job is to take that array and find an index N where the sum of the integers to the left of N is equal to the sum of the integers to the right of N.

If there is no index that would make this happen, return -1.

For example:
Let's say you are given the array {1,2,3,4,3,2,1}:
Your function will return the index 3, because at the 3rd position of the array, the sum of left side of the index ({1,2,3}) and the sum of the right side of the index ({3,2,1}) both equal 6.

Let's look at another one.
You are given the array {1,100,50,-51,1,1}:
Your function will return the index 1, because at the 1st position of the array, the sum of left side of the index ({1}) and the sum of the right side of the index ({50,-51,1,1}) both equal 1.

Last one:
You are given the array {20,10,-80,10,10,15,35}
At index 0 the left side is {}
The right side is {10,-80,10,10,15,35}
They both are equal to 0 when added. (Empty arrays are equal to 0 in this problem)
Index 0 is the place where the left side and right side are equal.

Note: Please remember that in most languages the index of an array starts at 0.

Input
An integer array of length 0 < arr < 1000. The numbers in the array can be any integer positive or negative.

Output
The lowest index N where the side to the left of N is equal to the side to the right of N. If you do not find an index that fits these rules, then you will return -1.

Note
If you are given an array with multiple answers, return the lowest correct index.
*/

// For loop example
const findEvenIndex = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    const left = arr.slice(0, i);
    const right = arr.slice(i + 1);
    const leftSum = left.reduce((a, b) => a + b, 0);
    const rightSum = right.reduce((a, b) => a + b, 0);
    if (leftSum === rightSum) {
      return i;
    }
  }
  return -1;
};

console.log(findEvenIndex([1, 2, 3, 4, 3, 2, 1])); // 3

// Reduce example
const findEvenIndex2 = (arr) => {
  let leftSum = 0;
  let rightSum = arr.reduce((acc, val) => acc + val, 0);

  return arr.reduce((acc, val, i) => {
    rightSum -= val;

    if (leftSum === rightSum && acc === -1) {
      return i;
    }
    leftSum += val;
    return acc;
  }, -1);
};

console.log(
  findEvenIndex2([
    -2, -9897, 9074, -8843, -7812, 4574, 9299, 1239, 9210, 4365, -9888, 248,
    -1075, -4237, -8755, -2491, -4178, 9259, 1169, 6309, 1440, 8891, -7705,
    9069, 3077, 48, -3435, 5404, 3016, 8459, 7706, -5834, -2947, 884, -9404,
    -3231, -9956, -2838, 1374, -9811, 7834, -8876, 4086, 804, -5128, 3683,
    -4232, -1680, -7065, 6117, -8791, 5870, -6279, -4446, 7032, 4415, -6501,
    -1251, 1147, 9500, 7940, -2962, -9364, -9740, 8582, -3974, -507, -1401,
    -6777, -8218, -8130, -9192, -3264, 169, -8554, 6814, -7570, 7900, -8356,
    4541, 8301, 8078, 884, -1808, 7323, 1405, -3054, -8026, 7300, 3000, -2977,
    700, 7065, -5776, -1105, -1640, 6041, 864, -6211, 1419, -3539, 8966, -9843,
    -3454, -9571, -6653, -4016, 5971, -9954, 7678, -5545, -5571, -1831, 8738,
    994, -9818, -2104, -1416, 242, -9889, -2668, 1418, -8932, 5085, 7868, -6149,
    6492, -4553, -7845, 6642, 7849, -8160, -7747, -501, 8843, -6887, 1979,
    -3576, -2343, -1723, -263, -9055, -7282, -6794, 4789, -7140, -1708, 7763,
    8255, 4350, -2183, 8326, -1085, 7193, 1384, 8659, -433, -1730, -6579, -5886,
    -3665, -6988, 143, -4058, -4273, 922, -5493, 2434, 245, 4974, 9638, 9257,
    -4108, 2715, -2038, 456, 2319, 8706, 6658, -8567, 3652, 9043, 2974, -2517,
    -5538, 4223, -9626, 1018, 2102, -4377, 9834, -7975, -8362, -5670, 8440,
    8481, -531, -6237, -9904, -9359, 8946, 8952, 9901, 3324, 2943, -2665, 8467,
    4812, -5377, 926, -4053, 3957, 1480, -4851, 5287, -6455, -5334, -100, 5010,
    1029, -876, -4981, 3026, -4729, 2121, 7201, 7544, 1995, 8225, 9163, -3923,
    3435, 622, -7218, 7891, -3217, -6789, -5539, 7517, -1910, -5250, 6131, 2440,
    -431, 2880, 478, -2662, 947, -9416, -2361, -6872, -5663, 2967, 3580, 3555,
    9992, 3725, 169, -3091, -6791, -3405, -9346, 1911, 4860, -4872, -321, -4876,
    -9942, 8286, -55, 2078, 1508, -5845, 8695, -1468, -4411, 6627, 58, 844,
    -9638, -6963, 3135, 1776, 6143, -8233, 3266, -6250, -8116, -190, -1616,
    6604, 5505, 2592, -7119, 6095, -6816, 8039, 5356, -6973, 7124, -1844, -7895,
    649, -4326, -3096, 1133, -3642, 6421, -6790, 325, -3758, -3900, 2665, 1563,
    -70, -8719, 7312, 4009, 4606, 6442, -6315, -7223, -3399, -7767, -9013, -715,
    -1401, -1662, 455, -61, 1442, 9581, -8452, -6802, -6762, -9141, 6283, -1786,
    -9193, 7549, 5860, 4015, -637, 8071, -3887, -650, -3552, 987, 7046, 8664,
    -126316,
  ])
); // 164
