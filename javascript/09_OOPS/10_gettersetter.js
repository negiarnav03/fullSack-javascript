// getter and setter

// via class

/*
class User {
    constructor(email, password) {
        this.email = email
        this.password = password
    }

    // we use _ if we use the same name for variable and the getter/setter method 
    // otherwise the callstack will keep on increasing and we will get an infinite loop
    
    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }
}

const user = new User('arnav@gmail.com', '123')
console.log(user.email);
*/


// via function

// function User(email, password) {
//     this.email = email
//     this.password = password
// }

// User.prototype.getEmail = function() {
//     return this.email
// }

// User.prototype.setEmail = function(email) {
//     this.email = email
// }

// let user1 = new User('arnav@gmail.com', '123')
// console.log(user1.email)


// via object.defineProperty

// function User1(email, password) {
//     this.email = email
//     this.password = password
// }

// Object.defineProperty(User1.prototype, 'email', {
//     get: function() {
//         return this._email.toUpperCase()
//     },
//     set: function(email) {
//         this._email = email
//     }
// })  

// Object.defineProperty(this, 'password', {
//     get: function() {
//         return this._password.toUpperCase()
//     },
//     set: function(password) {
//         this._password = password
//     }
// })  

let user2 = new User1('arnav@gmail.com', '123')
// console.log(user2.email)
// console.log(user2.email = 'test@gmail.com')
// console.log(user2.password)
// console.log(user2.password = '123456')
// console.log(user2.password) 


// way 2

const User ={
    _email: 'hhu@gmail.com',
    _password: '13142635',

    get email(){
        return this._email.toUpperCase()
    },
    set email(value){
        this._email = value
    }
}

const tea = Object.create(User)
console.log(tea.email);