function sum(...argumnets) {
  let total = 0;
  for (const arg of argumnets) {
    total = total + arg;
  }
  return total;
}

console.log(sum(1, 2, 3, 4, 5));

function manyArgumnets(a, b, ...restArguments) {
  console.log("a", a);
  console.log("b", b);
  console.log("rest", restArguments);
}

manyArgumnets("one", "two", "three", "four", "five", "six");

