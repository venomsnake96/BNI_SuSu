import React from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import './loading.css'

function Loading() {
  return (
    <div className='loading'>
        <CircularProgress sx={{fontSize:[100]}} color='error' />
    </div>
  )
}

export default Loading