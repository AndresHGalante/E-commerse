import './App.modules.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar.jsx'
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx'
import CardRender from './components/CardRender/CardRender.jsx';

function App() {
  return (
    <BrowserRouter>
      <div className='NavBar'>
        <NavBar />
      </div>
      <Routes>
        <Route path='/' element={<ItemListContainer />} />
        <Route path='/category/:categoryId' element={<CardRender />} />
        <Route path='/id/:id' element={<CardRender />} />
        <Route path='*' element={<h1>404 Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App