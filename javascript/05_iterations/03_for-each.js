const coding = ["js", "rust", "python", "cpp", "java"]

// coding.forEach(function (val) {
//     console.log(val);
// })  

// coding.forEach((val) => {
//     console.log(val);
// })

// function printMe(item) {
//     console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach((item, index, array) => {
//     console.log(item, index, array);
// })



// const myCoding = [
//     {
//         languageName: "javascript",
//         fileExtension: "js"
//     },
//     {
//         languageName: "python",
//         fileExtension: "py"
//     },
//     {
//         languageName: "java",
//         fileExtension: "java"
//     },
//     {
//         languageName: "rust",
//         fileExtension: "rs"
//     }
// ]

// myCoding.forEach((item) => {
//     console.log(`${item.languageName}: ${item.fileExtension}`);
// })



// what if we want to return values from for each

const arr = [1, 2, 3]

const result = arr.forEach((num) => {
    console.log(num + 1)
    return num + 1
})

console.log(result) // it returns undefined because for each never returns anything. It only iterates over the array.


// for each for a function

const obj = {
    name: "arnav",
    age: 21,
    city: "delhi"
}

function iterate(key, value){
    console.log(`${key}: ${value}`);
}

Object.entries(obj).forEach(function ([key, value]) {
    iterate(key, value);
})

// Object.entries(obj).forEach(([key, value]) => {
//     iterate(key, value);
// })
