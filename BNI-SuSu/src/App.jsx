import React from 'react'
import {Header, Footer, Tickets, Section} from './containers'
import {Logo, Navbar, Button} from './atomic-components'
import './App.css'
const App = () => {
  return (
    <div className='App'>
      <div className='gradeint__bg'>
    <Navbar/>
    <Header/>
      </div>
      <Section/>
      <Tickets/>
      <Footer/>
    </div>
  
  )
}

export default App