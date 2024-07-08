// some method of Array tests whether at least one element in the array passes the test implemented by the provided function. if passes the test it returns true otherwise false. it does not modified the array

const array = [2, 4, 6];
const checkOddNumber = (element) => element % 2 != 0;

console.log(array.some(checkOddNumber));

const Persons = [
  { name: "Florin", age: 30 },
  { name: "Ivan", age: 20 },
  { name: "Liam", age: 30 },
];
function PersonAge(person) {
  return person.age > 20;
}
const result = Persons.some(PersonAge);

console.log(result);

