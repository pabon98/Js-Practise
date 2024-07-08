// Object.entries() returns an array whose elements are arrays corresponding to the enumerable string-keyed property key-value pairs found directly upon object.
const Object1 = {
  a: "somestring",
  b: 42,
};

for (const [key, value] of Object.entries(Object1)) {
  console.log(`${key}: ${value}`);
}

const obj = { foo: "bar", baz: 42 };
console.log(Object.entries(obj));

const arrayLike = { 0: "a", 1: "b", 2: "c" };
console.log(Object.entries(arrayLike));

//Object.entries on primitive

// Non-object arguments are coerced to objects. undefined and null cannot be coerced to objects and throw a TypeError upfront. Only strings may have own enumerable properties, while all other primitives return an empty array.

// Strings have indices as enumerable own properties
let sky = "sky";

console.log(Object.entries(sky));

// Other primitives except undefined and null have no own properties
console.log(Object.entries(100)); // []

