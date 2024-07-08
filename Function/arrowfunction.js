const greetings = (name) => {
  console.log(`Hello, ${name}`);
};

greetings("John");

const number = (a, b) => a + b;

console.log(number(5, 6));

const numbers = [1, 2, 3, 4, 5, 6];

const evenNumbers = numbers.filter((num)=> num%2 == 0) 
console.log(evenNumbers);

const doublednumbers = numbers.map((num)=> num * 2)
console.log(doublednumbers);

