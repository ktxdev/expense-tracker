import React, { useState } from 'react'
import Modal from '../Modal'

const Transactions = ({ onAddTransaction }) => {
    const [transactions, setTransactions] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])
    const [showModal, setShowModal] = useState(false)
    const [desc, setDesc] = useState('')
    const [amount, setAmount] = useState(0)
    const [type, setType] = useState('')

    const toggleModal = () => setShowModal(!showModal)

    const submit = (e) => {
        e.preventDefault()
        console.log(`${desc}, ${amount}, ${type}`)
        // Process the submit
        const transaction = { description: desc, amount, type }
        onAddTransaction(transaction)
        toggleModal()
    }

    return (
        <div className="flex-grow flex flex-col">
            <h2 className="text-2xl mb-2">Transactions</h2>
            <div className="bg-white rounded-lg shadow p-4" >
                <div className="py-2">
                    {showModal && <Modal>
                        <div className="inset-0 absolute bg-gray-800 bg-opacity-30 flex items-center justify-center">
                            <form className="bg-white rounded-lg shadow-lg p-10 flex flex-col space-y-4 w-4/12">
                                <label htmlFor="desc">
                                    Description:
                                    <input value={desc} onChange={(e) => setDesc(e.target.value)} className="block bg-gray-200 outline-none rounded py-2 px-4 w-full" type="text" id="desc" />
                                </label>
                                <label htmlFor="amount">
                                    Amount:
                                    <input value={amount} onChange={(e) => setAmount(e.target.value)} className="block bg-gray-200 outline-none rounded py-2 px-4 w-full" type="number" min="0" id="amount" />
                                </label>
                                <label htmlFor="type">
                                    Type:
                                    <select value={type} onChange={(e) => setType(e.target.value)} className="block bg-gray-200 outline-none rounded py-2 px-4 w-full" id="type">
                                        <option value="" disabled>Select a type</option>
                                        <option value="INCOME">Income</option>
                                        <option value="EXPENSE">Expense</option>
                                    </select>
                                </label>
                                <div className="border-b-2 border-b-gray-200"></div>
                                <div className="flex justify-between py-4">
                                    <button onClick={toggleModal} className="py-2 px-8 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors duration-300 ease-in-out">Cancel</button>
                                    <button onClick={submit} className="py-2 px-8 bg-green-500 rounded-md hover:bg-green-600 text-white transition-colors duration-300 ease-in-out">Submit</button>
                                </div>
                            </form>
                        </div>
                    </Modal>}
                    <button onClick={toggleModal} className='py-1 px-8 bg-green-500 rounded-md hover:bg-green-600 text-white transition-colors duration-300 ease-in-out'>New</button>
                </div>
                <table className="w-full">
                    <thead className="text-left bg-slate-800 text-white">
                        <tr>
                            <th className="px-2">Description</th>
                            <th className="px-2">Type</th>
                            <th className="px-2">Amount</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody className="max-h-10 overflow-y-scroll">
                        {transactions.map(t => <tr key={t} className='py-4'>
                            <td className="px-2">Salary</td>
                            <td className="px-2">income</td>
                            <td className="px-2">38000.00</td>
                            <td className="px-2">
                                <button>edit</button>
                                <button>delete</button>
                            </td>
                        </tr>)}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Transactions