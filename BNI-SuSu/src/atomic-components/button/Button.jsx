import React from 'react'
import './button.css'
function Botton({textTo, handlerclick}) {
  return (
    <button className='button-prime' onClick={handlerclick} >{textTo}</button>
  )
}

export default Botton