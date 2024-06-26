import React from 'react'
import './cardInfo.css'

function CartInfo({icons, titleCard, textInfo}) {
  return (
        <div className='card-info'>
            <div className='icon-card'>{icons}</div>
            <div className='contain-info'>
              <h2>{titleCard}</h2>
              <p>{textInfo}</p>
            </div>
        </div>

    
  )
}

export default CartInfo