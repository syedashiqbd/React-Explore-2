import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter'

function App() {

  function handleClick(){
    alert('Button One Clicked')
  }
  const handleClick2 =() =>{
    alert('Button Clicked 2')
  }
  const addToFive =(num)=>{
    alert(num + 5)
  }
  return (
    <>
    <div>
      <Counter />
    </div>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>React</h1>
      <button onClick={handleClick}>Click 1</button>  
      <button onClick={handleClick2}>Click 2</button> 
      {/* <button onClick={()=> alert('Button 3 clicked')}>Click 3</button><br />
      <button onMouseEnter={()=>alert('Button 4 clicked')}>Button 4</button>
      <button onClick={()=> addToFive(3)}>Sum</button> */}

    </>
  )
}

export default App
