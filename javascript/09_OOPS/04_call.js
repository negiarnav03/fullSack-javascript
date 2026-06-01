// call : it is a method in javascript
// in call we can explicitly pass the reference of the object
// with the help of call we can use any object's property and method in another object


function setUserName(username) {
    this.username = username
}

function createUser(username, email, password) {
    setUserName.call(this, username)
    this.email = email
    this.password = password
}

const chai = new createUser('chai', 'chai@example.com', '123')
console.log(chai)