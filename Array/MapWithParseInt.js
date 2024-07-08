["1", "2", "3"].map((str) => {
  console.log(parseInt(str));
});

const numbers = [1, 2, 3, 4];

const filteredNumbers = numbers.map((value, index)=>{
    if(index<=3){
        return value
    }
})
console.log(filteredNumbers)

