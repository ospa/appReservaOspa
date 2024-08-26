import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { CartContextProvider } from './context/cartContext'

function App() {
  

  return (
    <>
    <CartContextProvider>
      <browserRouter>
      
        <NavBar/>
        <routes>
          <ItemListContainer greeting="Bienvenidos al sabor"/>
          <Route path='/' element={<ItemListContainer/>} />
          <Route path='/category/:cat' element={<ItemListContainer/>} />
          <Route path='/detalle/:id' element={<ItemListContainer/>} />
        </routes>
      </browserRouter>
    </CartContextProvider>
    </>
  )
}

export default App
