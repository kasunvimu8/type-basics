"use strict";
const chartactor = "kasun";
const inputs = document.querySelectorAll("input");
console.log(inputs);
inputs.forEach((inputs) => {
    console.log(inputs);
});
const add = (a, b, c) => {
    console.log(a + b);
};
const addAgain = (a, b, c) => {
    console.log(a + b);
};
add(12, 34);
// function signatures
let greet;
greet = (name, greeting) => {
    console.log(`greet ${name}`);
};
//dom and type casting
