// Multiple Cases with switch program
let fruit = "orange";

switch (fruit) {
  case "apple":
  case "mangoes":
  case "banana":
  case "orange":
    console.log(`${fruit} is fruit`);
    break;
  default:
    console.log(`${fruit} is not a fruit`);
}

//no case matched

switch ("no instrument") {
  case "trumpet":
    console.log("I play the trumpet");
    break;
  case "flute":
    console.log("I play the flute");
    break;
  case "oboe":
    console.log("I play the oboe");
    break;
  default:
    console.log("I don't play an instrument. Sorry");
    break;
}

