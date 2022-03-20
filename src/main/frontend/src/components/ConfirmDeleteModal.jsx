import React from 'react'
import Modal from './Modal'

const ConfirmDeleteModal = ({ description, onCancel, onConfirm }) => {
    return (
        <Modal>
            <div className="bg-white p-8 rounded-lg">
                <h2 className="text-2xl">Are you sure?</h2>
                <div className="border-b border-b-gray-200 mb-4 py-1"></div>
                <p className="py-4">Are you sure you want to delete transaction: <strong>{description}</strong> </p>
                <div className="flex justify-between py-4">
                    <button onClick={onCancel} className="py-2 px-8 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors duration-300 ease-in-out">No</button>
                    <button onClick={onConfirm} className="py-2 px-8 bg-green-500 rounded-md hover:bg-green-600 text-white transition-colors duration-300 ease-in-out">Yes</button>
                </div>
            </div>
        </Modal>
    )
}

export default ConfirmDeleteModal