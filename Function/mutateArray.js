// Write a JavaScript program to mutate the original array to filter out the values specified. Returns the removed elements.

const mutateArray =(arr, pullArr)=>{
let removedItem = [];
let updatedItem = []

let filteredItem = arr.map((item)=> (pullArr.includes(item) ? removedItem.push(item) : updatedItem.push(item)))
// updatedItem.push(filteredItem);
 return {removedItem, updatedItem}
}


let arr = ['a', 'b', 'c', 'd']

console.log(mutateArray(arr, ['b']
));