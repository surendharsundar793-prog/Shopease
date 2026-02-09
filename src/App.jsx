// import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Products from './Pages/Products'
import Productsdetail from './Pages/Productsdetail'
import Cart from './Pages/Cart'
import About from './Pages/About'
import Navbar from './Component/Navbar'
import Footer from './Component/Footer'
import ToastNotification from './Component/ToastNotification'

function App() {

  return (
    <div className="app-wrapper">
      <div className="main">
        <Navbar />
      </div>
      <Routes>
        <Route element={<Home />} path='/' />
        <Route element={<Products />} path='/products' />
        <Route element={<Productsdetail />} path='/product/:id' />
        <Route element={<Cart />} path='/cart' />
        <Route element={<About />} path='/about' />
      </Routes>
      <ToastNotification />
      <Footer />
    </div>
  )
}

export default App
