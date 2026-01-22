import { useState } from 'react'
import './App.css'

function App() {
  const [user, setuser] = useState("olaide")
  const [userobj] = useState({
    name: "john",
    age: 23,
    location: "lagos"
  })
  const [userarr , setuserarr] = useState ([
    {id: 1, name:"john", age: 23, location: "lagos", password:4567},
    {name:"doe", age: 25, location: " abuja", password:12346},
    {name:'from', age: 54, location:'osun', password:234},
  ])
  const DelectUser = (index) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this user?");
    if (!confirmDelete) return;




    const filteredUsers = userarr.filter((_, i) => i !== index);
    
    setuserarr (filteredUsers);
  } 
  const click = () =>{
    alert('the button has been clicked')
    setuser('fred')
  }
 
  
  return (
    <>
  
      <h1>{user}</h1>
      <button onClick={click}>click me</button>
      <h1>{userobj.name} {userobj.age} {userobj.location } {item.password} </h1>

      {/* <h1>{userarr[2].name}</h1> */}
      {/* {userarr.map((item, index) => (
        <h2 key={index}>{item.name} {item.age} {item.location}</h2>
      ))
      } */}

      
      <table>
        <thead>
          <tr>
            <th>S/N</th>
            <th>Name</th>
            <th>Age</th>
            <th>Location</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {userarr.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>{item.age}</td>
              <td>{item.location}</td>
              <td>{item.password}</td>
              <td><button onClick={() => alert(`Editing ${item.name}`)}>Edit</button></td>
              <td><button className='btn-delete'onClick={() => DelectUser(index)}>Delete</button></td>
            </tr> 
          ))}
        </tbody>
      </table> 
      </>
    
  )
}

export default App
