import { useState } from 'react'
import './App.css'
import { Container } from 'react-bootstrap'
import LoginPage from './components/LoginPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <LoginPage />
    </>
  )
}

export default App
