import React from 'react'

import './button2.css'

export default function Button2({textTo, handlercClose}) {
  return (
    
      <button className='btn2' onClick={handlercClose} >{textTo}</button>
    
  );
}
