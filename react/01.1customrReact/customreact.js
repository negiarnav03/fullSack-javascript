
function custonRender(reactElement, container){ // customised render method to render the react element

    // version 1
    // const domElement = document.createElement(reactElement.type)
    // domElement.innerHTML = reactElement.children
    // domElement.setAttribute('href', reactElement.props.href)
    // domElement.setAttribute('target', reactElement.props.target)

    // container.appendChild(domElement)
    // The appendChild() method is used to add a node (like an element or a text node) 
    // to the end of the child list of a specified parent node.



    // version 2    
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children

    for(const prop in reactElement.props){
        if(prop === 'children') continue;

        domElement.setAttribute(prop,reactElement.props[prop])
    }

    container.appendChild(domElement)
}


const reactElement = { // customised react element or object
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'click me to visit google'
}


const mainContainer = document.querySelector('#root')


custonRender(reactElement, mainContainer);


