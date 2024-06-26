import React from 'react'
import {Header, Patrocinadores, Footer} from '../containers/index'
import { Navbar } from "../atomic-components";

const PatrocinadoresPage = () => {
  return (
    <>
    <div className='gradient__bg'>
        <Navbar />
        <Header />
    </div>
    <div className='gradient__bg'>
    <Patrocinadores />
    <Footer />
    </div>
    </>
    
  )
}

export default PatrocinadoresPage