// Simple array
const arr = ["a", "b", "c"];

console.log(Object.keys(arr));

// Array-like object

const obj = { 0: "a", 1: "b", 2: "c", 4: 10 };
console.log(Object.keys(obj));

// Array-like object with random key ordering

const anObj = { 100: "a", 2: "b", 7: "c" };
console.log(Object.keys(anObj));

