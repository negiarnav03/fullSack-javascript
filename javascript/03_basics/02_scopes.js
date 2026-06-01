// scope '{ }' : are used in function and loops and conditonal statements.

/*
let a=1246
var c = 100
let d =1000
if(true){
    let a = 10
    console.log(" inside if block: ", a); // shows 10, because it is defined in the local scope.
    const b = 20
    var c = 30
    console.log(" inside if block: ", d); // shows 1000, because it is defined in the global scope.
    d=13
    console.log(" inside if block when changed: ", d); // shows 13, because it is defined in the global scope.
}

console.log(a); // shows error, because it is not defined in the global scope.
console.log(b); // shows error, because it is not defined in the global scope.
console.log(c); // shows 30, because it is defined in the global scope (var has no scope).
console.log(" outside if block: ",d); // shows 13, because it is defined in the global scope.

*/

// global scope vs local scope

// scope level and mini hoisting

function addOne(num){
    return num + 1
}

// addOne(5) // runs successfully, because it is defined before it is called. (it is function declaration)


// function expression
addTwo(5) // shows error, because it is defined after it is called. (it is function expression)
const addTwo = function(num){
    return num + 2
}

