const checkPalindrome = (currentWord)=>{
 let reverseWord = currentWord.split('').reverse().join('');
 return (
    currentWord == reverseWord ? "Palindrome" : "Not Palindrome"
 )

}

let value = checkPalindrome('amma')
console.log(value);