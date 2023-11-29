import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Login from './pages/Login'
import Home from './pages/Home'
import Signup from './pages/Signup'
import SetPassword from './components/SetPassword'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:shortID' element={<Home />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/verify/:userId/:token' element={<SetPassword />} />
      </Routes>
    </>
  )
}

export default App
