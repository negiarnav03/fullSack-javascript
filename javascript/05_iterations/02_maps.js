// map is a object which stores values in the form of key-value pairs
// map is also iterable

/*

const map = new Map()
map.set("IN", "India")
map.set("US", "United States")
map.set("FR", "France")
map.set("IN", "India") // it will not add duplicate keys

// console.log(map);

// for(const key of map){
//     console.log(key); // gives [key, value] array
// }

// for (const [key, value] of map) { // Destructuring the map
//     console.log(key, ":-", value);
// }


for (const key in map) {
    console.log(key); // return nothing because map is not iterable
}


//objects are not iterable

// const obj = {
//     java: 'java',
//     python: 'python',
//     cpp: 'cpp',
//     javascript: 'javascript',
//     ruby: 'ruby',
//     rust: 'rust'
// }

// for (const key of obj) {
//     console.log(key); // giving error 
// }



// for (const value in obj) {
//     console.log(value); // gives keys of the object
// }



// const arr = [1,2,3,4,5]
// for(const value in arr){
//     console.log(value); // gives keys (index) of the array
// }
 
*/



const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

/*
const newNums = arr.map((num) => { return num + 10 })
console.log(newNums)


// filter is used to test a condition, it doesn't modify the values.
// To filter even numbers, you check if num % 2 === 0
const evenNums = arr.filter( (num) => { return num % 2 === 0 })
console.log(evenNums)

*/


// chaining of map and filter method together 
const chain = arr
                .map((num) => num * 10)   // 1st multiply by 10
                .map((num)=> num + 10)    // then add 10
                .filter((num) => num % 2 === 0) // then filter 
console.log(chain)


