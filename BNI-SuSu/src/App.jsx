import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes';
import './App.css'
import { CartProvider } from "./atomic-components/contex/cart";
import FloatingActionButton from './atomic-components/button/FloatingActionButton';


const App = () => {
  return (
    <>
    <CartProvider>
      <Router>
      <AppRoutes />
    </Router>
    <FloatingActionButton
        phoneNumber="+5215512632862"
        message="Hola, me gustaría más información sobre el evento BNI Summer Supplier Summit."
      />
    </CartProvider>
      </>

   
  
  ) 
}

export default App