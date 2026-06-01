 /*

 there are 2 way to create objects in js
 1. using object literals
 2. using constructor function

 there is one more concept of singleton object.

 when we declare an object using constructor function, then it is called singleton object.

 when we declare an object using literals, then it is not called singleton object.

 */


 // object literals
const mySym = Symbol("key1") //symbol is used for unique values. e.g. id's 

 const JsUser = {
    name: "Arnav",
    "full name": "Arnav Negi",
    age: 22,
    location: "Dehradun",
    email: "negi@mail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"],
    [mySym]: "myKey1"  //important: proper way to call a symbol in object literal.
 }
/*

 console.log(JsUser.name);
 console.log(JsUser["name"]);
 console.log(JsUser["full name"]);
 console.log(JsUser[mySym]); // [mySym] is used to access the value of a symbol.


 // we can also change the value of any property in an object
 JsUser.email = "negi@google.com"
 console.log(JsUser.email);

  Object.freeze(JsUser) // using freeze, we can't change the value of any property in an object. It makes the object immutable.
 JsUser.email = "negi.microsoft.in"
 console.log(JsUser);

*/

 // function can be stored in a variable
 JsUser.greeting = function(){
    console.log(`Hello JS User!`);
 }

 console.log(JsUser.greeting()); // it returns undefined because it prints the value after the function is called
console.log(JsUser.greeting); // it returns the function itself because it is not called

JsUser.greetingtwo = function(){
    console.log(`Hello JS User, ${this.name}`); // this keyword is used to refer to the current object.
}
console.log(JsUser.greetingtwo());