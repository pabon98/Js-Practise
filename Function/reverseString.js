// write a function to reverse a string

//  Solution 1
function ReverseString (string){
 let reversedString = ""
 for (let i = string.length - 1; i>=0 ; i--){
    reversedString += string[i]
 }
 return reversedString
}

console.log(ReverseString('Extraction'));
console.log(ReverseString('Notice Period'));

// Solution 2
const reverseString = (item)=>{
   let splitArray = item.split('')
   let reversed = splitArray.reverse().join("");
   return reversed
}

console.log(reverseString('javascript'));

