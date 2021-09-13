import React, {useState} from 'react'
// import styled from 'styled-components'
// import Office from './setOffice'
import Routes from './routes'
import Navbar from './components/Navbar'
import { BrowserRouter } from 'react-router-dom'
import Login from './view/Login'

export default function App() {

  const [user, setUser] = useState(null)
  
  // const [user, setUser] = useState({
  //   id: 1,
  //   name: 'Pedro',
  //   avatar: ''
  // })
  const actionLoginDataGoogle = async (u) => {
    let newUser = {
      id: u.id,
      name: u.displayname,
      avatar: u.photoURL
    }

    setUser(newUser)

  }

  if(user ===  null) {
    return (
      <Login onReceiveGoogle={actionLoginDataGoogle} />
    )
  }

  return (
    <BrowserRouter>
      <Navbar />    
      <Routes />
    </BrowserRouter>
  )
}