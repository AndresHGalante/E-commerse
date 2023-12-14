import './App.css'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.jsx'
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx'
import NavBar from './components/NavBar/NavBar.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar className="Header"/>
        <Routes>
          <Route path='/' element={<ItemListContainer greeting='Lista de productos' />}></Route>
          <Route path='/category/:categoryId' element={<ItemListContainer greeting='Productos filtrados por categoria' />}></Route>
          <Route path='/detail/:productId' element={<ItemDetailContainer />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App