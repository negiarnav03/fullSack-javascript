// prototype

// create a prototype manually


let myName = "Arnav     "

// console.log(myName.length) // this returns 13

// now let's define our own length method for strings

String.prototype.trueLength = function () {
    console.log(this)
    console.log(`Actual length of string is ${this.trim().length}`)
}

myName.trueLength() // this returns Actual length of string is 5



// eg 2

let heros = ["thor", "spiderman"]

let heroPower = {
    "thor": "hammer",
    "spiderman": "web"
}

Object.prototype.hitesh = function () {
    console.log(`hitesh is present in every object`);
}

Array.prototype.heyArnav = function () {
    console.log(`Arnav is present in every object`);
}

heros.hitesh() // hitesh is present in every object
heroPower.hitesh() // hitesh is present in every object

heros.length // 2

heros.heyArnav() //Arnav is present in every object
// heroPower.heyArnav() // This would throw a TypeError because heroPower is not an Array

// now think about a situtation where you have to create a function which can be used by all the objects
// you can add it to the prototype of the object

// if you want to share some data with all the objects
// you can add it to the prototype of the object






// inheritance

const user ={
    name: "mail",
    email:"mail@gmail.com"
}
const Teacher = {
    makeVideos: true
}

const TeachingSupport ={
    isAvailable: true

}

const TASupport = {
    makeAssignment: 'js assignment',
    fullTime: true,
    __proto__: TeachingSupport // it is old way of doing things
}


Teacher.__proto__ = user


// modern way of doing things

Object.setPrototypeOf(TeachingSupport, Teaching)


