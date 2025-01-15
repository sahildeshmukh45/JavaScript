console.log(`hello`);
console.log(eval(`2+3+5*6`));
let welcomeMessage = 'hello freinds';
console.log(welcomeMessage);
let b=3;
let c=true; // let can only access in the block scope
const pi=3.14; //const can't be changed
var d=5; // variable can be accessed anywhere it is like global variable
alert('I am inside html page')
console.warn('This is Warning'); //for showing warning
console.error('Error') ; //for showing error
console.clear(); //for clearing console

function largerNum(num1,num2){
  if(num1>num2){
    return num1;
  }
  return num2;      
}
