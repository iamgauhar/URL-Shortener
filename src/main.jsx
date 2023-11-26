import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { UrlContextProvider } from '../context/urlContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <UrlContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </UrlContextProvider>

)
