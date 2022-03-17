import React from 'react'
import editIcon from '../../../assets/edit.png'
import deleteIcon from '../../../assets/delete.png'

const TransactionsTable = ({ transactions, onDelete, onEdit }) => {
    return (
        <table className="w-full table-auto">
            <thead>
                <tr>
                    <th className='bg-blue-100 border text-left px-8 py-2'>Description</th>
                    <th className='bg-blue-100 border text-left px-8 py-2'>Type</th>
                    <th className='bg-blue-100 border text-left px-8 py-2'>Amount</th>
                    <th className='bg-blue-100 border text-left px-8 py-2'></th>
                </tr>
            </thead>
            <tbody >
                {transactions.map(({ id, description, type, amount }) => <tr key={id}>
                    <td className='border-b px-8 py-2'>{description}</td>
                    <td className='border-b px-8 py-2'>{type}</td>
                    <td className='border-b px-8 py-2'>{amount}</td>
                    <td className='border-b px-8 py-2'>
                        <button onClick={() => onEdit(id)} className='mx-1 p-2 rounded-full hover:bg-gray-100'>
                            <img src={editIcon} alt="Edit" width="20" height="20" />
                        </button>
                        <button onClick={() => onDelete(id)} className='mx-1 p-2 rounded-full hover:bg-gray-100'>
                            <img src={deleteIcon} alt="Delete" width="20" height="20" />
                        </button>
                    </td>
                </tr>)}
            </tbody>
        </table>
    )
}

export default TransactionsTable