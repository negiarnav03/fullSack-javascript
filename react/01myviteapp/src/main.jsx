import React from 'react'
import reactDOM from 'react-dom/client'
import App from './App.jsx'


function MyApp(){
    return(
        <div><h1>hello world, my name is arnav</h1></div>
    )
}

// const reactElement = { // it will not work because we have not created the custom render function for it.
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     children: 'click me to visit google'
// }


// this is how we write the react code. it converts the code to the DOM tree 
// by babel compiler(the 'transpiler',ownely understand by react and react dom).
const anotherElement = <a href="https://google.com" target="_blank">visit google</a>


const anotherUser = 'learning chai aur code' // this is variable. in global scope.

const reactElement = React.createElement( // this will return an object as expected in the reactDOM. or the tree of react.
    'a', // type
    { href: 'https://google.com', target: '_blank' }, // props
    'click me to visit google', // childern
    anotherUser // children , we injected variables.
)



reactDOM.createRoot(document.getElementById('root')).render(
    // <MyApp /> # This is the best practice because of JSX.
    // MyApp()  # This is not the best practice but can do like this also.
    //reactElement
    //anotherElement
    <App/>
)
