import React, { useState } from 'react'
import TransactionsTable from './TransactionsTable'
import Pagination from './Pagination.jsx'

const TransactionsView = ({ title, showAddEditModal, transactions, editTransaction, confirmDeleteTransaction, pagination, changePage }) => {

    return (
        <div className="flex-grow flex flex-col">
            <h2 className="text-2xl mb-2">{title}</h2>
            <div className="bg-white rounded-lg shadow p-4" >
                <div className="py-2">
                    <button onClick={showAddEditModal} className='py-1 px-8 bg-green-500 rounded-md hover:bg-green-600 text-white transition-colors duration-300 ease-in-out'>New</button>
                </div>
                <TransactionsTable transactions={transactions} onEdit={editTransaction} onDelete={confirmDeleteTransaction} />
                { pagination.totalPages > 1 && <Pagination pagination={pagination} changePage={changePage} />}
            </div>
        </div>
    )
}

export default TransactionsView