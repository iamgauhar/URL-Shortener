import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Public from './pages/Public'
import Navbar from './components/Navbar'
import Login from './pages/Login'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Public />} />
        <Route path='/:shortID' element={<Public />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </>
  )
}

export default App
