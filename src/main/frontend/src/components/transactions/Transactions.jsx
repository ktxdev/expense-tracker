import React, { useState } from 'react'

const Transactions = () => {
    const [transactions, setTransactions] = useState([1, 2, 3, 4, 5, 6,7,8,9,0])
    return (
        <div className="flex-grow flex flex-col">
            <h2 className="text-2xl mb-2">Transactions</h2>
            <div className="bg-white rounded-lg shadow p-4" >
                <table className="w-full">
                    <thead className="text-left bg-slate-800 text-white">
                        <th className="px-2">Description</th>
                        <th className="px-2">Type</th>
                        <th className="px-2">Amount</th>
                        <th></th>
                    </thead>
                    <tbody className="max-h-10 overflow-y-scroll">
                        { transactions.map(t => <tr className='py-4'>
                            <td className="px-2">Salary</td>
                            <td className="px-2">income</td>
                            <td className="px-2">38000.00</td>
                            <td className="px-2">
                                <button>edit</button>
                                <button>delete</button>
                            </td>
                        </tr> )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Transactions