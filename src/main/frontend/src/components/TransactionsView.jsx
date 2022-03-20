import React, { useState } from 'react'
import { useAlert } from '../context/AlertContext'
import { useSpinner } from '../context/SpinnerContext'
import { addTransaction, updateTransaction } from '../service/transactions-service'
import ConfirmDeleteModal from './ConfirmDeleteModal'
import TransactionsTable from './TransactionsTable'

const TransactionsView = ({ title, showAddEditModal, transactions, editTransaction, confirmDeleteTransaction }) => {

    return (
        <div className="flex-grow flex flex-col">
            <h2 className="text-2xl mb-2">{title}</h2>
            <div className="bg-white rounded-lg shadow p-4" >
                <div className="py-2">
                    <button onClick={showAddEditModal} className='py-1 px-8 bg-green-500 rounded-md hover:bg-green-600 text-white transition-colors duration-300 ease-in-out'>New</button>
                </div>
                <TransactionsTable transactions={transactions} onEdit={editTransaction} onDelete={confirmDeleteTransaction} />
            </div>
        </div>
    )
}

export default TransactionsView