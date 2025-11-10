import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Card.jsx'

function App() {
  const [count, setCount] = useState(0)

  let myObj={
    name:"aryan",
    age:22    ,
    channel:"code with aryan",

  }

  let newArray=[1,2,3,4,5,6,7,8,9];
  return (
    <>
    <div>
      <h1 className ='bg-green-400 text-black p-4 rounded-xl' > tailwind test</h1>
    
   <Card username ="aryan" btnText = "click me " />
   <Card username ="vikas" btnText ="visit me" />
   
</div>
    </>
  )
}

export default App
