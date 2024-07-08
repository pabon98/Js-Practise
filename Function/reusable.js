const radius = [1,2,3];

const area = function (rad) {
  return Math.PI * rad * rad;
};

const diameter = function (rad) {
  return 2 * Math.PI * rad;
};

const calculate = function (radius, logic) {
  let output = [];
  for (let i = 0; i <radius.length; i++) {
    output.push(logic(radius[i]));
  }
  return output;
};

console.log(calculate(radius, area));
console.log(calculate(radius, diameter));

