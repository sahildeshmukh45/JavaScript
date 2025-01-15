let mix=[1,true,null,'four',5];   // array with mixed data types
console.log(mix);   // output: [1,true,null,'four',5]

let numbers=[1,2,3,4,5];   // declare an array
console.log(numbers);   // output: [1,2,3,4,5]
console.log(numbers[0]);   // output: 1

console.log(typeof numbers);   // output: object
console.log(Array.isArray(numbers));   // output: true 
console.log(numbers instanceof Array);   // output: true
console.log(numbers.length);   // output: 5
numbers.push(6);   // add an element at the end
console.log(numbers);   // output: [1,2,3,4,5,6]
numbers.unshift(0);   // add an element at the beginning
numbers.pop();   // remove an element from the end
console.log(numbers);   // output: [1,2,3,4,5]


let arr=[3,5,7,6];
arr.splice(1,2);   // remove 2 elements starting from index 1
 arr.toString();   // convert array to string
 arr.sort();   // sort array elements
 arr.reverse();   // reverse array elements
 arr.valueOf();   // return the primitive value of the array

 let [a,b,c,d]=arr;   // destructuring array
 console.log(a,b,c,d);   // output: 7 6 5 3