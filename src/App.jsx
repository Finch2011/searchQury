import { useState , useRef , useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [users, setUsers] = useState([]);
  const [Filteruser, setFilteruser] = useState([]);
  const [serched, setSerched] = useState(false);
  const input = useRef()
  useEffect(()=>{
      fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((output) => setUsers(output))
  },[])
  const searchUser = ()=>{
    setSerched(true);
    const SearchQury = input.current.value.toLoweCase();
    if(SearchQury === ""){
      setSerched(false)
      setFilteruser([])
      return;
    }
    const mathcedUser = users.filter((usersData)=>{
      usersData.username.toLoweCase().includes(SearchQury)

    })
    setFilteruser(mathcedUser)
  }
  return (
    <>
      <div className='users-container'>
       <div className="search-row">
        <input ref={input} type="search" />
        <button>search</button>
       </div>
      </div>
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
        {
         Filteruser.map( serched ? (usersData) => (
            <tr key={usersData.id}>
             <td>{usersData.username}</td>
             <td>{usersData.name}</td>
             <td>{usersData.email}</td>
             <td>{usersData.phone}</td>
             <td>{usersData.company.name}</td>
            </tr>
           )
            :(usersData) => (
           <tr key={usersData.id}>
            <td>{usersData.username}</td>
            <td>{usersData.name}</td>
            <td>{usersData.email}</td>
            <td>{usersData.phone}</td>
            <td>{usersData.company.name}</td>
           </tr>
          ))
        }
        <tbody>

        </tbody>
      </table>
    </>
  )
}

export default App
