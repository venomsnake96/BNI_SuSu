import React from 'react'

import './button2.css'

export default function Button2({textTo, handlercClose, onSumited }) {
  return (
    
      <button className='btn2' onClick={handlercClose} onSubmit={onSumited} >{textTo}</button>
    
  );
}
