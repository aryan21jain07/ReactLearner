import React from 'react'
import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

function Github() {
const data = useLoaderData();
    //  const [data, setData] = useState([])
    // useEffect(()=>{

       
    //       fetch('https://api.github.com/users/aryansanjayjain')
    //         .then(response => response.json())
    //         .then(data=> {setData(data)} )

    // })
  return (
    
    <div className =" bg-gray-600 text-white  p-4  text-center">
        <div className =" p-4  ">Hello Aryan</div>
      Github Followers : {data.followers}
      <img src ={data.avatar_url} alt="GitHub Avatar" className="mx-auto mt-4 rounded-full w-32 h-32"/>
    </div>
  )
}

export default Github


export const githubinfoLoader = async ()=>{
    const respnse = await fetch('https://api.github.com/users/aryansanjayjain');
    const data = await respnse.json();
    console.log(data);
    return data;
}
