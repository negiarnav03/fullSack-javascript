import React, { useState, useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

export default function Github() {

    const data = useLoaderData()
    // const [data,setData] = useState([]);
    
    // useEffect(() => {
    //     fetch('https://api.github.com/users/negiarnav03')
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data);
    //         setData(data);
    //     })
    // }, []);

  return (
    <div className='flex items-center justify-center text-3xl bg-gray-600 text-white'>Github followers: {data.followers}
     <img src={data.avatar_url} alt="Git profile" />
    </div>
  )
}


export const githubLoader = async () => {
    const response = await fetch('https://api.github.com/users/negiarnav03');
    return response.json();
}
