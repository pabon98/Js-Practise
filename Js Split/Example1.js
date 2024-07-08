// split method of string takes a pattern and divides this string into order list of substring
let str = "I like to play cricket";
let split = str.split("");
console.log(split);

let another = "I like to play football";
console.log(another.split(" "));

let emptyString = "";
// string is empty and separator is non-empty
console.log(emptyString.split("a"));

// string and separator are both empty strings

console.log(emptyString.split(emptyString));