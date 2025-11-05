import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const[counter,setcounter]=useState(15)

  const addValue =()=>{
    // console.log("value added",Math.random())
    if(counter>=20){
      alert("counter cannot exceed more than 20")
      return
    }
    else{
    setcounter(counter+1)
    }
  }

  return ( 
    <>
      <h1> aryan and react </h1>
      <h2> counter value :{counter}</h2>

      <button
      onClick={addValue}>add value {counter}</button>
      <br />
      <button onClick={()=>setcounter(counter-1)}>subtract value {counter}</button>
    </>
  )
}

export default App
