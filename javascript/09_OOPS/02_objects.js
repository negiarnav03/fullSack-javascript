 // objects

//  function mutiplyBy5(num){
//     return num *5
//  }

//  mutiplyBy5.power = 2
//  console.log(mutiplyBy5(5)) // return 25
//  console.log(mutiplyBy5.power) // return 2
//  console.log(mutiplyBy5.prototype); // return {} -> object 



 function createUser(username , score){
    this.username = username;
    this.score = score;
 }

 // we used prototype here because we want to add methods to the objects created by the constructor function.
 // methods added to the prototype are not added to each object individually.
 // they are added to the prototype object only once.
 // and when we try to access any method or property, JS will first look in the object itself.
 // and if not found, it will look in the prototype object.
 // and if not found, it will look in the prototype object's prototype object.
 // and so on.
 // this is called prototypal inheritance.
 
 createUser.prototype.increment = function(){
    this.score += 1;
    console.log(this);
 }
 
 createUser.prototype.printMe = function(){
    console.log(`Price is ${this.score}`);
 }

// const user1 = createUser("arnav" , 25) // it will return window object on site. or undefined in node
const user1 = new createUser("arnav" , 25) // the new keyword is used to create a new object and link it to the constructor function.
const user2 = new createUser("hitesh" , 20)

user1.increment();
user1.printMe();


/* 

Here's what happens behind the scenes when the new keyword is used: 

A new object is created: the new keyword initiates the creation of a new Javascript empty object.

A prototype is linked: The newly created object is linked to the prototype property of the constructor function.
this means that it has accesss to the properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object.
if no explicit return value is specified from the constructor, JS assumes this, the newly created object, to be the intended return value.

The new object is returned: after the constructor function has been called, if it doesn't return a non primitive value(object, array, function,etc).
the newly created object(this) is retned.

*/
 