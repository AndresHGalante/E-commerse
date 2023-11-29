import { useState } from 'react'
import './App.modules.css';
import NavBar from './components/NavBar/NavBar.jsx'
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx'
import CartWidget from './components/CartWidget/CartWidget.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='NavBar'>
        < NavBar />
      </div>
      <div className='NavBar' id='Right'>
        < CartWidget />
      </div>
      <div>
      < ItemListContainer />
      </div>
    </>
  )
}

export default App