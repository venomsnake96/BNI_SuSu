import React from 'react'
import {Titlecomp} from '../../atomic-components/index'
import CardId from '../../atomic-components/cards/CardId'
import {photo1, photo2} from '../../assets/profileImage'
import './conferencias.css'

const Conferencias = () => {
  return (
    <div className='conferencias-section'>
      <Titlecomp texto='Ponentes' />
      <div className='cards-container'>
     <CardId 
     image={photo1}
     name={'Eiichi Matsuo Sotelo'}
     spin={'Software Developer'}
     company={'RPM code'} 
     about={'Digitaliza tu potencial, estamos aqui para llevarte de la mano'}
     conferencia={'Nuevas herramientas digitales y su aplicacion empresarial'}
    />
     
     <CardId  image={photo2}
     name={'Toribius Maximus'}
     spin={'Produc Teaster'}
     company={'Top cats'} 
     about={'Especialistas en el mercado de productos premium para tu gatito'}
     conferencia={'La importancia del contenido alimneticio de los productos para mascotas'} 
     />
      </div>
    </div>
  )
}

export default Conferencias