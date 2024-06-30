import { useState , useRef , useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [users, setUsers] = useState([]);
  const [Filteruser, setFilteruser] = useState([]);
  const [serched, setSearched] = useState(false);
  const input = useRef()
  const select = useRef()
 
  useEffect(()=>{
      fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((output) => setUsers(output))
  },[])

  const searchUser = ()=>{
    setSearched(true);
    const SearchQury = input.current.value.toLowerCase();
    if(SearchQury === ""){
      setSearched(false)
      setFilteruser([])
      return;
    }

    const mainInformation = select.current.value
    let Filterusers;
    
    switch(mainInformation){
      case "username":
         Filterusers = users.filter((usersData)=>
          usersData.username.toLowerCase().includes(SearchQury)
        )
        break;
        case "name":
         Filterusers = users.filter((usersData)=>
          usersData.name.toLowerCase().includes(SearchQury)
        )
        break;
        case "email":
         Filterusers = users.filter((usersData)=>
          usersData.email.toLowerCase().includes(SearchQury)
        )
        break;
        case "phone":
         Filterusers = users.filter((usersData)=>
          usersData.phone.toLowerCase().includes(SearchQury)
        )
        break;
        case "company":
         Filterusers = users.filter((usersData)=>
          usersData.company.name.toLowerCase().includes(SearchQury)
          
        )
    }
    

    setFilteruser(Filterusers)
  }
  return (
    <>
      <div className='users-container'>
       <div className="search-row">
        <input ref={input} onInput={searchUser} type="search" placeholder='searching username ...' />
         <select name="" id="" ref={select}>
          <option value="username">UserName</option>
          <option value="name">Name</option>
          <option value="email">Email</option>
          <option value="phone">Phone</option>
          <option value="company">Company</option>
         </select>
       </div>
      </div>
      <div className='container-table'>
      <table>
        <thead>
          <tr>
            <th>UserName</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Company</th>
          </tr>
        </thead>
      
        <tbody>
        {serched ? 
         Filteruser.map((usersData) => (
            <tr key={usersData.id}>
             <td>{usersData.username}</td>
             <td>{usersData.name}</td>
             <td>{usersData.email}</td>
             <td>{usersData.phone}</td>
             <td>{usersData.company.name}</td>
            </tr>
           )) : users.map((usersData) => (
            <tr key={usersData.id}>
             <td>{usersData.username}</td>
             <td>{usersData.name}</td>
             <td>{usersData.email}</td>
             <td>{usersData.phone}</td>
             <td>{usersData.company.name}</td>
            </tr>
           ))
        }
        </tbody>
      </table>
      </div>
      
    </>
  )
}

export default App
