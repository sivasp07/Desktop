// let num1= prompt("Enter first number: ");
// let num2= prompt("Enter the second number: ");
// let num3= prompt("Enter the third number: ");

// let largest= Math.max(num1,num2,num3);

// console.log("The largest number is" + largest);/
//using if else//

let num1= prompt("Enter first number: ");
let num2= prompt("Enter the second number: ");
let num3= prompt("Enter the third number: ");

if(num1>=num2 && num1>=num3){
  largest=num1;
}
else if(num2>=num1 && num2>=num3){
    largest=num2;
}
else{
    largest=num3;
}

console.log("the largest number is " + largest);

