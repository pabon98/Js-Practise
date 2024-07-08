// Function to get the last n elements of an array
let last = function (array, n) {
  if (array == null) {
    return;
  }
  if (n == null) {
    return array[array.length - 1];
  }
// checking if n parameter value is available it is giving the last elements of the array.
  return array.slice(Math.max(array.length - n, 0));
};

console.log(last([7, 9, 0, -2]));
console.log(last([7, 9, 0, -2],3));
console.log(last([7, 9, 0, -2],6));

