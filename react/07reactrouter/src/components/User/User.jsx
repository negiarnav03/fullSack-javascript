import React from 'react'
import { useParams } from 'react-router-dom'

// it is basically used to get the dynamic parameters from the URL
// like in our case we have defined the route as /user/:userid so the userid is the dynamic parameter
// and we can get it by using the useParams() hook


export default function User() {
    const {userid} = useParams()
    return (
        <div className='flex items-center justify-center text-3xl bg-gray-600 text-white'>
            <h1>User :{userid}</h1>
        </div>
    )
}