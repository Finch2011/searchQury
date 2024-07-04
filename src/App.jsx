import { useState , useRef , useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [users, setUsers] = useState([]);
 
  useEffect(()=>{
      fetch("https://api.escuelajs.co/api/v1/products?offset=3&limit=13")
      .then((res) => res.json())
      .then((output) => setUsers(output))
  },[]);

  return(

    <div>
      <div className='container'>
        {users.map((usersData) => (
          <div className='main-div' key={usersData.id}>
              <img src={usersData.images[0]} alt="" />
              <div className='title-div'>
              <span>{usersData.price}</span>
              <h5>{usersData.title.slice(0,10)}</h5>
              <p>{usersData.description.slice(0 , 125)}</p>
              </div>
            </div>
           ))}
      </div>
    </div>
)
  
}

export default App
