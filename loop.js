// let num=1;
// while(num<=10){
//     console.log(num);
//     num++;
// }  

// let arr=[1,2,3,4,5];
// let sum=0;
// for(let i=0;i<arr.length;i++){
//     sum += arr[i];
// }
// console.log(sum);   // output: 15


let r=[1,2,3,4,5,6,7,8,9,10];

// for(let i=0;i<r.length;i++){
//     if(r[i]===8){
//         console.log(`Number found at index ${i}`);
//     }
// }

function returnMax(r){
    let max=r[0];
    for(let i=0;i<r.length;i++){
        if(r[i]>max){
            max=r[i];
        }
    }
    return max;
}
console.log(returnMax(r));  // output: 10