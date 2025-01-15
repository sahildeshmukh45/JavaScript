// function fibbo(n){
//   if(n<=1){
//     return n;
//   }
//   return fibbo(n-1)+fibbo(n-2);
// }

// console.log(fibbo(7));

function validAge(age){
  if(age>=18){
    return "You are eligible to vote";
  }
  return "You are not eligible to vote";
}

console.log(validAge(18));

function a(x,y){
  for(let i=2;i<=y;i++){
     isPrime=true;
     for(let j=i;j<i/2;j++){
      if(i%j==0){
        isPrime=false;
        break;
      }
     }
      if(isPrime){
        console.log(i);
  }
}
}
console.log(a(2,10));

// parameters

function add(x,y){
  let sum =x+y;
  return sum;s
}
function isEven(num){
  if(num%2==0){
    return true;
  }
  return false;
}

function larger(x,y){
  if(x>y){
    return x;
  }
  return y;
}
