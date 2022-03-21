import React from 'react'
import { createPortal } from 'react-dom'
import spinnerGif from '../assets/spinner.gif'

const FullPageSpinner = () => {
  return (
    createPortal(
        <div className="inset-0 absolute bg-gray-800 bg-opacity-50 flex flex-col items-center justify-center z-50">
            <img src={spinnerGif} alt="spinner" />
            <h4 className="text-white text-lg tracking-widest">Please wait...</h4>
        </div>,
        document.getElementById("spinner-root")
    )
  )
}

export default FullPageSpinner