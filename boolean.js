console.log(8>50); //false
console.log(typeof 'string'); //string
console.log(typeof 8>50); //boolean
console.log(5=='5'); //true becaue == will check only value either it is string or number
console.log(5==='5'); //false because === will check value and type both


let age=21;
if(age>18){
  console.log('You can drive');
}
else{
  console.log('You cannot drive');
}

age=36;
age>18 ? console.log(`you can drive`) : console.log(`you cannot drive`);

 age =32; // gaurd operataor
var finalAge= age || 18; //if age is not defined then it will take 18 as default

age=0;
 finalAge= age ?? 18; //this is default value operator most of the time we use this
  // it will check if age is null or undefined then it will take 18 as default