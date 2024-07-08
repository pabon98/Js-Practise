// Closure

// 1st example
function makeFunction(){
    const name = "Mozilla";
    function displayName(){
        console.log(name); 
    }
    return displayName
}

let myFn = makeFunction();
console.log(myFn());

//2nd example

function makeAdder(x){
    return function (y){
        return x + y;
    }
}

const add5 = makeAdder(5)
const add10 = makeAdder(10)

console.log(add5(5))
console.log(add10(5))