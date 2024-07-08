//this is an alternative of if else chains
// Value: 0 , Output: So What Is Your Name?
// Value: 1, Output: What Is Your Name?
// value: 2, Output: Your Name?
// Value: 3, Output: Name ?
// Value: 4, Output: ?
// Value: 5, Output: !

const foo = 1;
let output = "Output: ";
switch (foo) {
  case 0:
    output += "So ";
  case 1:
    output += "What ";
    output += "Is ";
  case 2:
    output += "Your ";
  case 3:
    output += "Name";
  case 4:
    output += "?";
    console.log(output);
    break;
  case 5:
    output += "!";
    console.log(output);
    break;
  default:
    console.log("Please pick a number from 0 to 5!");
}

