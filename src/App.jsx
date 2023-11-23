import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header.jsx'
import Cuadros from './components/Cuadros/Cuadros.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        < Header />
      </div>
      <div>
        <Cuadros />
      </div>
    </>
  )
}

export default App
