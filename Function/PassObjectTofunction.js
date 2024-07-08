function myFunc(obj) {
  obj.name = "Hero";
}

const myBike = {
  name: "Honda",
  model: "Accord",
  year: 1998
};
console.log(myBike.name);
 myFunc(myBike)
 console.log(myBike.name);

