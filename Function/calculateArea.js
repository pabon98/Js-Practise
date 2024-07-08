const radius = [1, 2, 3];
const calculateArea = function (rad) {
  const output = [];
  for (i = 0; i < rad.length; i++) {
    output.push(Math.PI * radius[i] * radius[i]);
  }
  return output;
};

console.log(calculateArea(radius));

const diameter = [1, 2, 3];

const calculateDiameter = function (meter) {
  const output = [];
  for (i = 0; i <= meter.length; i++) {
    output.push(2 * Math.PI * meter[i]);
  }
  return output;
};

console.log(calculateDiameter(diameter));

