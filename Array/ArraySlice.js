const fruits = ["Banana", "Orange", "Jackfruit", "Apple", "Lemon"];

const slicedFruits = fruits.slice(0);
console.log(slicedFruits);

const anotherFruits = ["Banana", "Orange", "Jackfruit"];
const slicedAnotherFruits = anotherFruits.slice(0, 2);
console.log("anotherFruits", anotherFruits);
console.log("slicedAnotherFruits", slicedAnotherFruits);

const myHonda = {
  color: "red",
  wheels: 4,
  engine: { cylinders: 4, size: 2.2 },
};

const myCar = [myHonda, 2, "cherry condition", "purchased 1997"];
const slicedItems = myCar.slice(0,2);
console.log(slicedItems);
