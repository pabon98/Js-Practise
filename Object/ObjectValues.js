const Object1 = {
  a: "SomeString",
  b: 42,
  c: false,
};

console.log(Object.values(Object1));

// Array-like object

const arrayLikeObj1 = { 0: "a", 1: "b", 2: "c" };
console.log(Object.values(arrayLikeObj1));

// Array-like object with random key ordering

const arrayLikeObject2 = { 100: "a", 2: "b", 7: "c" };
console.log(Object.values(arrayLikeObject2));

//Object values on primitive

//Non-object arguments are coerced to objects (Jor kore Object banai). undefined and null cannot be coerced to objects and throw a TypeError upfront. Only strings may have own enumerable properties, while all other primitives return an empty array.

const animal = "tiger";

console.log(Object.values(animal)); // ['t', 'i', 'g', 'e', 'r']

const number = 100;

console.log(Object.values(number)); // []


