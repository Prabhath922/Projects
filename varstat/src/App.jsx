import { useState } from 'react'
import Athletes from './components/Athletes'
import Sponsors from './components/Sponsors'
import Teams from './components/Teams'
import Navigation from './components/Navigation'
import Singup from './components/Sign-Up'
import Home from './components/Home'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Home/>
        <Teams/>
        <Sponsors/>
        <Athletes/>
        <Singup/>
      </div>
    </>
  )
}

export default App
