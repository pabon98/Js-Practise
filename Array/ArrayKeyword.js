const points = new Array(60, 40);

console.log(points);

points.push(100, 200);

console.log(points);

// With this  Array keyword creating array with one element makes problem.
// it gives [ <empty items>].
const scores = new Array(10);
console.log("scores",scores);

//recognize array
const Names = ["Akash", "Rahim", "karim", "Kamal"];
const checkArray = Array.isArray(Names);
const instanceArray = Names instanceof Array
console.log("checkArray",checkArray);
console.log("instance", instanceArray);

