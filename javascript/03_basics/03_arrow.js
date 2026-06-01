
/*

//  this function : it is a refrence to current context. 

const user = {
    username: "arnav",
    price:999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
    }
}

user.welcomeMessage()
user.username = "hitesh"
user.welcomeMessage()

console.log(this); // shows empty object in node environment

function chai(){
    let username = "arnav"
    console.log(this.username); // shows undefined, because it is not defined in the global scope.
}

chai()

const chai = function(){
    let username = "arnav"
    console.log(this.username); // shows undefined, because it is not defined in the global scope.
}

function fnc(){
    console.log(this); // gives various values depending on the environment
}
fnc()

*/

// Arrow Functions :  this is also a refrence to current context but it is lexically scoped. 
// () => {}
 
    
    
/*
const fnc = () => {
    let username = "arnav"
    console.log(this.username); // shows undefined, because it is not defined in the global scope.
    console.log(this); // gives empty object in node environment
}
fnc()


// way 1
const twoNum = (num1, num2) => {
    return num1 + num2
}

// way 2 (implicit return)
const twoNum = (num1, num2) => num1 + num2;


// way 3 (implicit return with parenthesis)
const twoNum = (num1, num2) => (num1 + num2);


const add = (n1, n2) => ({username: "arnav"})
const add1 = (n1, n2) => {username: "arnav"}

console.log(add(2,5))
console.log(add1(2,5))


*/