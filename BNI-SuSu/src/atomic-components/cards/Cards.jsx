import React from 'react'
import './cards.css'



function Cards({title, texrParh, imageFor}) {
  return (
    <div className='card'>
      <img src={imageFor} alt="img" className='card-img' />
      <div className='card-conten'>
      <h2 className='card-title'>{title}</h2>
      <p className='card-body'>{texrParh}</p>
      </div>
    </div>
  )
}

export default Cards