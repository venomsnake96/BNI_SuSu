import React from 'react'
import {Titlecomp} from '../../atomic-components/index'
import {ponentes} from '../../data/data-ponenetes/ponentes.json'
import CardId from '../../atomic-components/cards/CardId'
import './conferencias.css'

function Conferencias() {
  return (
    <div className='conferencias-section'>
      <Titlecomp texto='Ponentes' />
      <div className='cards-container'>
      <CardId ponentes={ponentes} />
      </div>
    </div>
  )
}

export default Conferencias