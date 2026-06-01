/*

how the memory stored in the data according to that there are 2 types of data tyes:

1. primitive data types: there are call by value.

string, number, boolean, undefined, symbol, bigInt, null



2. reference data type (non-primitive): there are call by reference.

array, object, function




Js is a dynamic typing langugae. 


*/

const arr = [1, 2, 3, 4, 5] // return type object
const obj = { name: "Arnav", age: 21, isStudent: true } // return type object
const func = () => { console.log("Hello"); } // return type function  to be specfic object function 

// console.log(typeof arr) // object
// console.log(typeof obj) // object
// console.log(typeof func) // function
// console.log(typeof null) // object


let str = "Arnav" // return type string
let num = 21 // return type number
let bool = true // return type boolean
let und = undefined // return type undefined
let sym = Symbol("123") // return type symbol
let big = 121231241352634675n // return type bigint
let nul = null // return type object

console.log(typeof str)
// console.log(typeof num)
// console.log(typeof bool)
// console.log(typeof und)
// console.log(typeof sym)
// console.log(typeof big)
// console.log(typeof nul)



// *************



/*

Stack (Primitive) -> here we get the copy of the variable

let name = "arnav"
let anotherName = name

anotherName = "hitesh"

// console.log(name)        // arnav
// console.log(anotherName) // hitesh



Heap (Non-Primitive) -> here we get the reference of the variable
let userOne = { name: "Arnav", email: "[EMAIL_ADDRESS]" }
let userTwo = userOne

userTwo.email = "[EMAIL_ADDRESS]"

// console.log(userOne.email)    // [EMAIL_ADDRESS]
// console.log(userTwo.email)    // [EMAIL_ADDRESS]

*/