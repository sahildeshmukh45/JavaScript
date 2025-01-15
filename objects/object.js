// let product={compnay:'Mango',
//   price:100,
//   quantity:10,
// }
// let newPrice='price'+10;
// console.log(product.price);
// console.log(product['price']);
// console.log(product[newPrice]);             
// delete product['company'];          


let product={                            // here product is object and company,price,item-name are properties also company,price,item-name are keys
  company: 'Mango',                         // 'Mango',100,'t-shirt' are values it is like hashmap in java
  price:'100',
  'item-name':'t-shirt',                    // here i have use - that is whay i have to use '' in key
  displayPrice:function(){
    console.log(`Price is ${this.price}`);  // this is anonymous function In objects the function is called method,in object function,
    }                                       //   methods can also present console.log() in which console is object and log is method
  };
product.displayPrice();


let productO={         
  company: 'Mango',                   
  price:'100',
  'item-name':'t-shirt',                                                        
}

let{company,price}=productO;                                            // here i have use destructuring
console.log(company);
console.log(price);