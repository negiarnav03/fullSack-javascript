// creating a promise


const promiseOne = new Promise(function(resolve, reject){
    //do an async task
    // db calls, cryptography, network calls
    setTimeout(function(){
        console.log("Async task is completed");
        resolve() // after this the promise will be resolved
    },1000)


})

// .then() is directly proportional to resolve()
promiseOne.then(function(){
    console.log("Promise consumed")
})




// way 2 - creating a promise that will be resolved with an object

new Promise(function(resolve, reject){
  setTimeout(function(){
    console.log("Async task 2");
    resolve() // after this the promise will be resolved
  },1000)  
}).then(function(){
    console.log("Async task 2 completed")
})



// way 3 -  creating a promise that will be resolved with an object and passing it to then

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username:"Arnav", pass:"123"})
    },1000)
})

promiseThree.then(function(user){
    console.log(user)
})


//way 4 -  creating a promise that will be resolved with an object and passing it to then and catch it also

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username:"Arnav", pass:"123"})
        }
        else{
            reject('Error: Something went wrong')
        }
    },1000)
})

promiseFour.then((user)=>{
    console.log(user);
    return user.username;
}).then((username)=>{
    console.log(username)
}).catch((error)=>{
    console.log(error)
}).finally(()=>{ console.log("The promise is either resolved or rejected")})


// way 5 - using async and await with try and catch


const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username:"javaScript", pass:"123"})
        }
        else{
            reject('Error: Something went wrong')
        }
    },1000)
})


async function consumePromiseFive(){
    try{
        const response = await promiseFive
        console.log(response);
    } 
    catch(error){
        console.log(error)
    }
}

consumePromiseFive()



// live example - fetching data from an api

// pt 1: Assigning the Fetch Promise to promiseSix

const promiseSix = new Promise(function(resolve, reject){
    fetch('https://jsonplaceholder.typicode.com/users').then((response)=>{
        return response.json()
    }).then((data)=>{
        resolve(data)
    }).catch((error)=>{
        reject(error)
    });
})

promiseSix.then((data)=>{
    console.log(data)
}).catch((error)=>{
    console.log(error)
})


// pt 2: Chaining Directly without a Variable

fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log(error);
    });



// way 6 - using async and await with try and catch for fetching data from an api

async function getAllUsers(){
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        console.log(data)
    }
    catch(error){
        console.log('E: ',error)
    }
}

// getAllUsers()



