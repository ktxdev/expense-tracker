import React from 'react'
import spinner from '../assets/spinner.gif'

const Spinner = () => {
  return (
    <div className='flex items-center justify-center bg-white rounded-lg shadow h-5/6'>
        <img src={spinner} alt="Spinner" />
    </div>
  )
}

export default Spinner