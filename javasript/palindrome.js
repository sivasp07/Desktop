function checkpalindrome(str){
let arrayvalues = string.split('');
let reverseArrayvalues = arrayvalues.reverse();
let reverseString = reverseArrayvalues.join('');

if(string==reverseString){
    console.log('It is a palindrome');
}
else{
console.log('It is not a palindrome');
}
}
let string = prompt('Enter a string: ');
checkpalindrome(string);