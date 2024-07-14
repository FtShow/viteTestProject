import {useEffect, useState} from 'react'
import './App.css'
import {SecondComponent} from "./SecondComponent.tsx";

function App() {
  const [count, setCount] = useState(1)
  useEffect(()=>{
    console.log('APP')
  },[])

  return (
    <>
      <div>{count}</div>
        <SecondComponent value={'VAL'}/>

    </>
  )
}

export default App
