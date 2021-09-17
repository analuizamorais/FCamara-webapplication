import React, {useState} from 'react'
// import styled from 'styled-components'
// import Office from './setOffice'
import Routes from './routes'
import Navbar from './components/Navbar'
import { BrowserRouter } from 'react-router-dom'
import Login from './view/Login'


export default function App() {

  const [user, setUser] = useState(null)
  
  const actionLoginData = async (u) => {
    let newUser = {
      email: u.email,
      name: u.displayName,
      avatar: u.photoURL
    }

    setUser(newUser)

  }


  if(user ===  null) {
    return (
      <Login onReceive={actionLoginData} />
    )
  }

  localStorage.setItem("email", user.email);
  return (
    <BrowserRouter>
      <Navbar user={user} />    
      <Routes />
    </BrowserRouter>
  )
}