import React from 'react'
import { useAlert } from '../context/AlertContext';
import Modal from './Modal';

const NewTransactionModal = ({ transaction, setTransaction, onCancel, onSave }) => {

    const { showError } = useAlert()

    const handleInputChange = (e) => {
        const target = e.target
        if (target.type === "text") {
            setTransaction({ ...transaction, description: target.value })
        }

        if (target.type == "number") {
            setTransaction({ ...transaction, amount: target.value })
        }

        if (target.type === "select-one") {
            setTransaction({ ...transaction, type: target.value})
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (transaction.description === '') {
            showError('Description should be provided')
            return
        }
        if (transaction.amount === 0) {
            showError("Amount should be greater than 0")
            return
        }
        if (transaction.type === '') {
            showError("Type should be selected")
            return
        }

        onSave()
    }


    return (
        <Modal>
            <form className="bg-white rounded-lg shadow-lg p-10 flex flex-col space-y-4 w-4/12">
                <label htmlFor="desc">
                    Description:
                    <input value={transaction.description} onChange={handleInputChange} className="block bg-gray-200 outline-none rounded py-2 px-4 w-full" type="text" id="desc" />
                </label>
                <label htmlFor="amount">
                    Amount:
                    <input value={transaction.amount} onChange={handleInputChange} className="block bg-gray-200 outline-none rounded py-2 px-4 w-full" type="number" min="0" id="amount" />
                </label>
                <label htmlFor="type">
                    Type:
                    <select value={transaction.type} onChange={handleInputChange} className="block bg-gray-200 outline-none rounded py-2 px-4 w-full" id="type">
                        <option value="" disabled>Select a type</option>
                        <option value="INCOME">Income</option>
                        <option value="EXPENSE">Expense</option>
                    </select>
                </label>
                <div className="border-b-2 border-b-gray-200"></div>
                <div className="flex justify-between py-4">
                    <button onClick={onCancel} className="py-2 px-8 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors duration-300 ease-in-out">Cancel</button>
                    <button onClick={handleSubmit} className="py-2 px-8 bg-green-500 rounded-md hover:bg-green-600 text-white transition-colors duration-300 ease-in-out">Save</button>
                </div>
            </form>
        </Modal>
    )
}

export default NewTransactionModal