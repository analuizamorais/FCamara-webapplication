import React from 'react'
import styled from 'styled-components'
import Navbar from './Navbar'

const App = () => {
  return (
    <Container>
      <Navbar />
    </Container>
  )
}

const Container = styled.div`
  background-color: #656565;
  height: 200vh;
`

export default App