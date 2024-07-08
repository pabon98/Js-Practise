// Write a JavaScript program to calculate how many numbers in the given array are less than or equal to the given value.

const checkArrayLength = (arr, num)=>{
 if(arr.length == num){
    return "Array length is equal to number"
 }
 else{
    return "Array length is not equal to given number"
 }
}


console.log(checkArrayLength([1,2,3,4,5], 3));