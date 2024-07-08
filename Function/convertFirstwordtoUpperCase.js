const convertFirstWordToUpperCase = (value)=> {
    let text = value.split(" ");
    let newString = []
    for(let i = 0; i< text.length; i++){
       let convertUpperCase = text[i].charAt(0).toUpperCase() + text[i].slice(1);
       newString.push(convertUpperCase)
    }

    return newString.join(' ');

}

console.log(convertFirstWordToUpperCase("learning with sumit"));