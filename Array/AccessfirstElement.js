// Write a Js function to get the first n elements of the array

const first =(arr, n)=>{

    if(n < 0){
        return []
    }
    if(n == null){
        return arr[0]
    }
    if(arr == null){
        return 0
    }
    return arr.slice(0, n)

}




console.log(first([1,2,3], 2))
console.log(first([5,6,7], -3));
console.log(first([5,6,7], 1));
console.log(first([5,6,7], 5));
console.log(first([6,7,8,3]));
console.log(first([], 3));

