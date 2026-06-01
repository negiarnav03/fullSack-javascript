// its after es6


// call is another method than prototypes to pass the constructor values.
// Behind the scenes, classes are just syntactic sugar over prototypal inheritance.


class User {
    constructor(username, email, password) {
        this.username = username
        this.email = email
        this.password = password
    }

    encryptPassword() {
        return `${this.password}abc`
    }
    
}


const chai = new User('chai', 'chai@example.com', '123')
console.log(chai.encryptPassword())