//splice modified the original array it removes item from the array and also can add new items in the array
const months = ["january", "february", "April", "June"];

months.splice(2, 0, "March");

console.log(months);

months.splice(4, 1, "May");
console.log(months);

const myFish = ["Hilsha", "Shamon", "Curb"];
const removed = myFish.splice(2, 0, "drum");
console.log(removed);
console.log(myFish);

const newFood = ["chicken", "beef", "mutton", "fish"];
// here first parameter is starting index which is 0, second parameter starts delete the item like here it will delete 0 & 1 (chicken & beef) and third parameter will include new item on the array.
const deletedItem = newFood.splice(0, 2, "Traditional Kacchi Food");
console.log("newFood", newFood);
console.log("deletedItem", deletedItem);

const numbers = [1, 2, 3, 4, 5];
// here it will delete 1 index which is 2
const removedNumber = numbers.splice(1, 1);
console.log(removedNumber);
console.log("modified array", numbers);

