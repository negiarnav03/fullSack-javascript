// static allows you to create a property or method that belongs to the class itself, 
// rather than to any instance of the class. 
// This means you can access it directly using the class name, without creating an object.

class User {
    constructor (username){
        this.username = username;
    }

    logMessage(){
        console.log(`username is ${this.username}`);
    }

    static createId(){
        return  `1234`
    }
}

const user1 = new User("arnav")
//console.log(user1.createId());


class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }
}


const iphone =new Teacher("iphone",'ihpne@apple.con','123456')
iphone.logMessage()
// console.log(iphone.createId());