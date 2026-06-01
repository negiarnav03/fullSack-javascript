// functions
/*
function addTwoNumber(num1, num2){
    console.log(num1 + num2);
}

const result =addTwoNumber(3,5)

console.log("result: ", result); // result: undefined (Because function is not returning any value)


function addTwoNumbers(num1, num2){
    return num1 + num2; 
}

const res =addTwoNumbers(3,5)

console.log("result: ", res); // result: 8


function loggedInUserMessafe(username){
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `Hello ${username}`
}

console.log(loggedInUserMessafe("Arnav"));
console.log(loggedInUserMessafe("3543")); // This will print the number
console.log(loggedInUserMessafe());

*/


function calculateCartPrice(val1, val2, ...num1){ // using rest operator
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000))
/*
// way 1 to call a object in function
 const user = {
    name: "Arnav",
    price: 223
    
 }


 function handleObject(anyobject){
    console.log(`Username is ${anyobject.name} and price is ${anyobject.price}`);
 }   


handleObject(user)

// way 2 to call a object in function
handleObject({name: "Negi", price: 300})

*/


//passing an array in function

/*
// way 1 to pass an array in function
const myArr = [200, 400, 1000, 4000]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myArr));


// way 2 to pass an array in function
console.log(returnSecondValue([1,2,3,4,5]));


*/



