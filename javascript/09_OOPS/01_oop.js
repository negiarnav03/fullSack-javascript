// object literal: it is a way to create an object. i.e. we can create an object directly.
// however it has many limitations. such as we cannot create multiple objects of the same type.

// const user = {
//     username : "arnav",
//     loginCount : 8,
//     signedIn : true,
    
//     getUserDefault : ()=>{
//         console.log(`usernaem is ${username}`);
//         console.log(`username is ${this.username}`);
//         console.log(this);
//     }

// }

// console.log(user)
// console.log(user.username)
// console.log(user.getUserDefault());
// console.log(this);


// constructor function: it is a way to create an object. i.e. we can create an object directly.
// Constructor functions are designed specifically to solve this limitation of object literal. 
// They act as a blueprint (or template) from which you can create multiple distinct instances (objects) of the same structure using the new keyword.

function User(username,loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }

    return this;
}

const user1 = User("arnav",5,true);
const user2 = new User("hitesh",10,false);

console.log(user1)
console.log(user1.constructor) // gives reference to the function that created the object.
console.log(user2)


// What does new keyboard do:
// 1. Creates a new empty object -> {} -> this = {}
// 2. link it to the constructor function -> new User(...)
// 3. gets injected to this keyword
// 4. returns the value of this

 