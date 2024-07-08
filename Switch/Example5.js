const Animal = "Giraffe";
switch (Animal) {
  case "Cow":
  case "Giraffe":
  case "Dog":
  case "Cat":
    console.log(`This ${Animal} is not extinct`);
    break;
  case "Dinosaur":
  default:
    console.log(`This ${Animal} is extinct`);
}

