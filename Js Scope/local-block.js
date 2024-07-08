var text = "hello"
function localBlockScope (){
    let fnScope = "I am function scope"
    if(true){
        var local = "I am local scope"
        // block scope
        let block = "I am block scope"
    }
    console.log(local);
    console.log(fnScope);
    console.log(block);
}

localBlockScope()

function exampleBlockScope() {
    if (true) {
      let blockVariable = "I'm block-scoped with 'let'";
      const constantBlockVar = "I'm block-scoped with 'const'";
    }
    console.log(blockVariable); // Error: blockVariable is not defined
    console.log(constantBlockVar); // Error: constantBlockVar is not defined
  }


  function checkCondition() {
    // local scope / function scope
    let result = "Before condition";
    if (true) {
      let result = "Inside condition"; // Block-scoped variable
    }
    console.log(result); // "Before condition" from the outer scope
  }