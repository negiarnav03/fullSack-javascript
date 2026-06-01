//Immediately Invoked Function Expression (IIFE) : it is a function that is executed immediately after it is defined.

(function chai(){
    console.log("DB Connected"); // it is also called database connection function.
})(); // ()() this is used to invoke the function immediately.



( (name) => {
    console.log(`DB Connected ${name}`); // it is also called database connection function.
}) ("arnav"); // ()() this is used to invoke the function immediately.


// using arrow function

(() => {
    console.log(`DB Connected`); // it is also called database connection function.
}) (); // ()() this is used to invoke the function immediately.