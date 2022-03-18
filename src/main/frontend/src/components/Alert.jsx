import React from 'react'
import { createPortal } from 'react-dom'
import cancelIcon from '../assets/cancel.png'

const Alert = ({ message, isError, onClose }) => {
    const bgColor = isError ? 'bg-red-600' : 'bg-green-600';
    return (createPortal(
        <div className={`${bgColor} absolute top-4 right-4 max-w-md py-4 px-8 rounded-lg flex space-x-4 items-center justify-between`}>
            <p className='text-white'>{message}</p>
            <button onClick={onClose} className="shrink-0">
                <img src={cancelIcon} alt="Cancel" width="30" height="30" />
            </button>
        </div>,
        document.getElementById("alert-root")
    ))
}

export default Alert