// closures

function outer(){
    let username = 'Arnav'

    function inner(){
        console.log(username);
    }
    return inner   // it returns the inner function's whole lexical scope as a reference & this is called closure 
}

const closure = outer()
closure()
