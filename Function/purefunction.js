// A Pure Function is a function (a block of code) that always returns the same result if the same arguments are passed. It does not depend on any state or data change during a program’s execution. Rather, it only depends on its input arguments.
function CalculateProductPrice(productprice) {
  return productprice * 0.05;
}

console.log(CalculateProductPrice(10));

// this is not pure function because output is dependent on external variable tax
let tax = 20;
function calculateProductTax(productprice) {
  return productprice * (tax / 100) + productprice;
}

console.log(calculateProductTax(10));

