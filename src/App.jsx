import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Login from './pages/Login'
import Home from './pages/Home'
import Signup from './pages/Signup'
import SetPassword from './components/SetPassword'
import Welcome from './pages/Welcome'
import ForgotPassword from './components/ForgotPassword'
import Redirecter from './pages/Redirecter'

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
        <Route path='/welcome' element={<Welcome />} />
        <Route path='/forgetPassword' element={<ForgotPassword />} />
        <Route path='/r' element={<Redirecter />} />
      </Routes>
    </>
  )
}

export default App
