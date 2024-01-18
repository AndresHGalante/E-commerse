import './App.css'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.jsx'
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx'
import NavBar from './components/NavBar/NavBar.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from './Context/CartContext.jsx'
import CartView from './components/CartView/CartView'
import Checkout from './components/Checkout/Checkout'

function App() {
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <NavBar className="Header" />
          <Routes>
            <Route path='/' element={<ItemListContainer greeting='Lista de productos' />}></Route>
            <Route path='/category/:categoryId' element={<ItemListContainer greeting='Productos filtrados por categoria' />}></Route>
            <Route path='/detail/:productId' element={<ItemDetailContainer />}></Route>
            <Route path='/cart' element={<CartView />} />
            <Route path='/checkout' element={<Checkout />} />
            <Route path='*' element={<h1>Error 404: Elemento no encontrado</h1>}></Route>
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </>
  )
}

export default App