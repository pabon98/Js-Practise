function splitString(stringToSplit, seperator) {
  const arrayOfSeparators = stringToSplit.split(seperator);
  console.log(arrayOfSeparators);
//   console.log(seperator);
}

const tempString = "Oh brave new world that has such people in it.";
const monthString = "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec";

// eta manei koma die seperate kore string guloke
const space = " ";
// but eta comma die seperate kore na
const comma = ",";

splitString(tempString, space);
splitString(monthString, comma);

