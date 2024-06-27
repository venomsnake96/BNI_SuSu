import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes';
import './App.css'
import { CartProvider } from "./atomic-components/contex/cart";


const App = () => {
  return (
    <>
    <CartProvider>
      <Router>
      <AppRoutes />
    </Router>
    </CartProvider>
      </>

   
  
  )
}

export default App