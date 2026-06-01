// ques: can we change the value of pi? 
// ans: no 
// because it is defined in property descriptor

// example;

// const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")
// console.log(descriptor);
// they are hard coded in js so that we can't change them.


//making our own descriptor:

// const myObj = {
//     name: "arnav",
//     price: 999,
    
// }

// console.log(Object.getOwnPropertyDescriptor(myObj, "name"));

// Object.defineProperty(myObj, "name", {
//     writable: false,
//     enumerable: true,
//     configurable: false
// })


// console.log(Object.getOwnPropertyDescriptor(myObj, "name"));

// myObj.name = "arnav2"
// console.log(myObj.name);




// iterable: properties that can be iterated over.
// [Symbol.iterator]: property that returns an iterator object.



// TRYING TO CHANGE THE VALUE OF PI:

// Object.defineProperty(Math, "PI", {
//     writable: true,
//     enumerable: true,
//     configurable: true
// })


// console.log(Math.PI);
// Math.PI = 20
// console.log(Math.PI);



// example 2

const chai={
    name: "ginger-chai",
    price: 250,
    isAvailable: true,

    orderChai: function(){
        console.log("chai");
    }
}

console.log(Object.getOwnPropertyDescriptor(chai,"name"));

// Object.defineProperty(chai, 'name', {
//     writable: false,
//     enumerable: false
// })


// console.log(Object.getOwnPropertyDescriptor(chai,"name"));


for (let [key,value] of Object.entries(chai)) {
    if(typeof value !== 'function'){
        console.log(`${key}: ${value}`);
    }
    
}