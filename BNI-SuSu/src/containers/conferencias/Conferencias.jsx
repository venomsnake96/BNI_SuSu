import React from 'react'
import {Titlecomp, CardId} from '../../atomic-components/index'
import {} from '../../assets/profileImage'
import './conferencias.css'

const Conferencias = () => {
  return (
    <div className='conferencias-section'>
      <Titlecomp texto='Ponentes' />
      <div className='card-id-container'>
      <CardId />
      <CardId />
      </div>
    </div>
  )
}

export default Conferencias