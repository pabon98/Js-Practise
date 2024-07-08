// write a function to round a number
const roundNumber = (num)=>{
 let roundedNumber = Math.ceil(num);
return roundedNumber
}

console.log(roundNumber(5.67));

// write a function to round a Decimal number to fixed digits

const roundDecimalToFixDigits = (decimal)=>{
 let convertTofixedDigit = decimal.toFixed(2);
 return convertTofixedDigit
}

console.log(roundDecimalToFixDigits(5.123478));