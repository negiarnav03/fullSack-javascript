//Singleton object - when object is made using constructor, it is a singleton object.
//Objects.create

//Normal objects are not singleton objects.

/*

const User = {} // not a singleton object
const User1 = new Object() // singleton object



const tinderUser={}

tinderUser.id = "1234abc"
tinderUser.name = "Arnav"
tinderUser.isLoggedIn = false

// console.log(tinderUser);


const regularUser = {
    
    email: "some@gmail.com",
    fullname: {
        userFullName:{
            firstname: "Arnav",
            lastname: "Negi"
        }
    }
}


console.log(Object.keys(tinderUser)); // gives an array of keys of an object
console.log(Object.values(tinderUser)); // gives an array of values of an object
console.log(Object.entries(tinderUser)); // gives an array of key-value pairs of an object
console.log(Object.hasOwnProperty('email')); // check if an object has a specific property


// console.log(regularUser.fullname.userFullName.lastname);

/*
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj4 = {5: "e", 6: "f"}

const obj3 = Object.assign({}, obj1, obj2, obj4) // (target (first one), source objects(rest of them). merging using Object.assign())
console.log(obj3);

const obj5 = {...obj1, ...obj2, ...obj4} // merging using spread operator)
console.log(obj5);
*/

// objects in array

/*
const users = [
    {
        id: 1,
        name: "Arnav",
        email: "[EMAIL_ADDRESS]"
    },
    {
        id: 2,
        name: "Arnav",
        email: "[EMAIL_ADDRESS]"
    },
    {
        id: 3,
        name: "Arnav",
        email: "[EMAIL_ADDRESS]"
    }
]


// how to access object inside an array
// console.log(users[0].name);


// how to print all objects using loop

for (let i = 0; i < users.length; i++) {
    console.log(users[i]);
}
*/




// singleton objects

/*

// 1. Initialize the singleton object
const mySingletonUser = new Object();

// 2. Populate it using dot notation
mySingletonUser.id = "987xyz";
mySingletonUser.name = "John";
mySingletonUser.isLoggedIn = true;

// You can also populate it using bracket notation
mySingletonUser["email"] = "john@example.com";

// You can even add nested objects
mySingletonUser.address = {
    city: "New York",
    country: "USA"
};

console.log(mySingletonUser);

*/


// destructuring of objects


const myObject = {
    name: "John",
    age: 30,
    city: "New York",
    "value to world": "very good"
};

// Destructure the object
const { name, age, city, "value to world": value} = myObject;  // the last one is to rename the variable.
// it is to destructure the object, and use the variables directly. and it is very useful in props.



// Now you can use the variables directly
console.log(name); // Output: John
console.log(age);  // Output: 30
console.log(city); // Output: New York
console.log(value); // Output: very good


