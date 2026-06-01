// inheritance: It is the mechanism 
// by which one object accesses the properties and methods of another object (achieved via prototype chain delegation).

// call: A built-in JavaScript method 
// used to invoke a function with an explicitly specified 'this' context, 
// allowing us to share/borrow methods and chain constructors.


class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }
}


class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}


const chai = new User("chai")
const tea = new Teacher("tea", "tea@example.com", "123")

chai.logMe()
tea.logMe()
tea.addCourse()