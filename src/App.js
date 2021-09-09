import React, {useState} from 'react'
// import styled from 'styled-components'
// import Office from './setOffice'
import Routes from './routes'
import Navbar from './Navbar'
import { BrowserRouter } from 'react-router-dom'
import Login from './view/Login'

export default function App() {

  const [user, setUser] = useState(null)
  
  // const [user, setUser] = useState({
  //   id: 1,
  //   name: 'Pedro',
  //   avatar: ''
  // })
  if(user ===  null) {
    return (
      <Login />
    )
  }

  return (
    <BrowserRouter>
      <Navbar />    
      <Routes />
    </BrowserRouter>
  )
}