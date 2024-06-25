import React from 'react'
import {Header, Patrocinadores, Footer} from '../containers/index'
import { Navbar } from "../atomic-components";

const PatrocinadoresPage = () => {
  return (
    <>
    <div className='gradeint__bg'>
        <Navbar />
        <Header />
    </div>
    <div className='solid_bg'>
    <Patrocinadores />
    <Footer />
    </div>
    </>
    
  )
}

export default PatrocinadoresPage