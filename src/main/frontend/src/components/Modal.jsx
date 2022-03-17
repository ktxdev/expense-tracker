import { createPortal } from 'react-dom'

const Modal = ({ children }) => {
  return (
    createPortal(
      <div className="inset-0 absolute bg-gray-800 bg-opacity-30 flex items-center justify-center">
        {children}
      </div>,
      document.getElementById("modal-root")
    )
  )
}

export default Modal