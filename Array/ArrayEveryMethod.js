// every method of array checks whether all elements in the array pass the test implemented by the provided function.

const array1 = [10, 20, 30, 40, 50, 60];

const isBelowThreshold = (number) => number > 100;

const result = array1.every(isBelowThreshold);

console.log(result);


const array2 = [100,200,300,400,500]

const isGreaterThreshold =(value)=> value < 1000

const result2 = array2.every(isGreaterThreshold)

console.log(result2)

