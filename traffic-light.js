/* 
You're writing code to control your town's traffic lights. You need a function to handle each change from green, to yellow, to red, and then to green again.

Complete the function that takes a string as an argument representing the current state of the light and returns a string representing the state the light should change to.
*/

// Conditional Example
function conditionalLight(current) {
  if (current === "green") {
    return "yellow";
  } else if (current === "yellow") {
    return "red";
  } else if (current === "red") {
    return "green";
  }
}

console.log(conditionalLight("green")); // "yellow"

// Ternary Example
function updateLight(current) {
  return current === "green"
    ? "yellow"
    : current === "yellow"
    ? "red"
    : "green";
}

console.log(updateLight("green")); // "yellow"

// Object Verbose Example
function newLight(current) {
  const light = {
    green: "yellow",
    yellow: "red",
    red: "green",
  };
  return light[current];
}

console.log(newLight("green")); // "yellow"

// Object Shortland Example
const newUpdatedLight = (current) =>
  ({
    green: "yellow",
    yellow: "red",
    red: "green",
  }[current]);

console.log(newUpdatedLight("green")); // "yellow"
