const fruits = ["Banana", "Orange", "Apple", "Mango"];

fruits.map((fruit) => {
  console.log(fruit);
});

const numbers = [1, 2, 3, 4, 5, 6];

const roots = numbers.map((number)=> number * 2);
console.log(roots);

// setting new property in object
const products = [
    { name: "sports car" },
    { name: "laptop" },
    { name: "phone" },
  ];
  
  products.map((product) => {
    product.price = 100;
  });

  console.log(products)