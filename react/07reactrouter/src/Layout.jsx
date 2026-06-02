// it can be called root, app, layout. anything
// it just tells about the outer things like header and footer and in between it renders the child component.
// and also we can define routes in this too.

import React from 'react'
import { Outlet } from 'react-router-dom'
import {Header, Footer} from './components/index'
// {outlet} is a hook which tells where to render the child component.
// and in our case the main router is / which tells to render the root component 
// which in our case is Layout component so it will render the Layout component and the Outlet
// will render the child component. 
// we can apply props to the Layout component using the {children} prop.

export default function Layout() {
    return (
        <>
        <Header /> 
        <Outlet />
        <Footer />
        </>
    )
}