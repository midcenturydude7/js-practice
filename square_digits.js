function squaredDigits(num) {
  const squaredArray = [...String(num)].map((dig) => dig * dig).join("");
  return `Your number is ${num}, and it is equal to ${Number(squaredArray)}`;
}

console.log(squaredDigits(9119)); // Your number is 9119, and it is equal to 811181
