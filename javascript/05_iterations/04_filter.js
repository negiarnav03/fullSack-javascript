// filter

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
 
// practical example with filter method 
// const bigNumbers = myNums.filter((num) => num > 4) // using arrow function and implicit return, no need for braces and return
// console.log(bigNumbers)  

// const bigNumbers2 = myNums.filter((num) => {  // using arrow function and explicit return
//     return num > 4    
// })
// console.log(bigNumbers2)

// important note about filter method 
// filter method create a new array with all the elements that pass the test implemented by the provided function. 
// filter method does not modify the original array.
// filter method return an array of the elements that pass the test. 


// const newNums = []
// myNums.forEach( (num) => { // return only true condition false conditions are ignored
//     if (num > 4) {
//         newNums.push(num)   // printing via forEach method in comparison to filter method
//     }
// })

// console.log(newNums)


const Books = [ // example with objects
    {
        name: "Book One",
        genre: "Physics",
        publish: 1981,
        rating: 4.2
    },
    {
        name: "Book Two",
        genre: "Mathematics",
        publish: 1992,
        rating: 4.5
    },
    {
        name: "Book Three",
        genre: "Chemistry",
        publish: 1999,
        rating: 4.7
    },
    {
        name: "Book Four",
        genre: "Physics",
        publish: 2001,
        rating: 4.8
    },
    {
        name: "Book Five",
        genre: "Mathematics",
        publish: 2005,
        rating: 4.9
    }
]


let userBooks = Books.filter( (book) => { return book.genre == 'Physics'}) // printing only books of Physics genre
console.log(userBooks)

let userBooks2 = Books.filter( (book) => book.publish >= 1995 && book.rating >= 4.5) // printing only books of Physics genre
console.log(userBooks2)