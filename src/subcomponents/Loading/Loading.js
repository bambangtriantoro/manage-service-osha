import './Loading.css'
import React from 'react'

const Loading = ({size}) => {
  return (
    <div className='loader-container'>
        <div className={size === 'small' ? 'loader small' : 'loader'}></div>
    </div> 
  )
}

export default Loading