// bind: It returns a NEW function with the 'this' keyword bound to a specific object.
// Unlike call(), which executes the function immediately, bind() does not run the function. 
// It only returns a new function that you can execute later.

const user = {
    username: "arnav",
    greet: function () {
        console.log(`Hello, my name is ${this.username}`);
    }
}

// 1. Direct call (Works perfectly)
// 'this' refers to the 'user' object
user.greet(); // Output: Hello, my name is arnav


// 2. Losing Context (The Problem)
// When we assign the method to a variable or pass it as a callback (e.g., to setTimeout),
// the function is executed in a different context where 'this' is no longer the 'user' object.
const looseGreet = user.greet;
looseGreet(); // Output: Hello, my name is undefined


// 3. Using bind() (The Solution)
// bind() creates a copy of the function and permanently binds 'this' to the 'user' object.
const boundGreet = user.greet.bind(user);
boundGreet(); // Output: Hello, my name is arnav


// 4. Practical use case in callbacks (e.g., setTimeout)
// Without .bind(user), setTimeout would print "Hello, my name is undefined"
setTimeout(user.greet.bind(user), 1000);
