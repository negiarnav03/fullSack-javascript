// reduce is used to reduce an array to a single value 
// reduce is also a higher order function
// syntax: array.reduce(callbackFunction, initialValue)
// The callback function takes two arguments:
// 1. accumulator (acc): the accumulated value previously returned in the last invocation of the callback, or initialValue, if supplied.
// 2. currentValue (curr): the current element being processed in the array.

// boiler code of reduce method

/*
const arr = [1, 2, 3, 4, 5]

// const reducedArray = arr.reduce(function (accumulator, currentValue) {
//     console.log(`accumulator: ${accumulator}, currentValue: ${currentValue}`)
//     return accumulator + currentValue
// }, 0) // initialValue is 0

// console.log(reducedArray)   // 15

// using arrow function
const redArr = arr.reduce( (acc, curVal) => acc + curVal, 3)

console.log(redArr)
*/

// practical example of reduce method 

const price = [
    {
        name: "apple",
        price: 10
    },
    {
        name: "banana",
        price: 20
    },
    {
        name: "orange",
        price: 30
    }
]

const totalCost = price.reduce((acc, item) => acc + item.price, 0)

console.log(totalCost)  // 60
