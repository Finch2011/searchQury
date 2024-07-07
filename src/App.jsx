import { useState , useRef , useEffect } from 'react'
import './App.css'

function App() {
  const Input = useRef()
  const Input2 = useRef()
  const Input3 = useRef()

 function sendInformation(){
    fetch('https://dummyjson.com/users/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        firstName: `${Input.current.value}`,
        lastName: `${Input2.current.value}`,
        age: `${Input3.current.value}`,
        /* other user data */
      })
    })
    .then(res => res.json())
    .then(console.log);
  }

  return(
    <>
    <div className='container'>
      <label htmlFor="">First Name :</label>
      <input ref={Input} type="text"/>
      <label htmlFor="">Last Name :</label>
      <input ref={Input2} type="text"/>     
      <label htmlFor="">Age :</label>
      <input ref={Input3} type="text"/>
      <button onClick={sendInformation}>send</button>
    </div>
    </>
)
  
}

export default App
