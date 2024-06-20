import './titlecomp.css'
import React from 'react'
import BeachAccessIcon from '@mui/icons-material/BeachAccess';

function Titlecomp({texto}) {
  return (
    <div className='title-section'>
    <BeachAccessIcon sx={{fontSize: 40}}/>
    <h2 >{texto}</h2>
    </div>
  )
}

export default Titlecomp