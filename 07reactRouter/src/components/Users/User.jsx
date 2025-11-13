import React from 'react'
import { useParams } from 'react-router-dom';

  

function User() {
  const {UserId} = useParams();
  return (
    <div>
      <div className =" bg-gray-600 text-white  p-4  ">User : {UserId}</div>
    </div>
  )
}

export default User
