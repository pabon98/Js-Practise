// Write a JavaScript program to get the nth element of a given array of elements.

function getNthElement (arr, n){
    if(arr.length && n>=0 && n<arr.length){
        return arr[n]
    }
    else{
        return null
    }

}

const array = [1,2,3,4,5]

const nthElement = getNthElement(array, 4);
console.log(nthElement);