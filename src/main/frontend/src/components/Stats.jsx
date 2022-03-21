import React from 'react'
import Stat from './Stat'

const Stats = ({ statistics}) => {
    
    return (
        <div className="flex space-x-2 mb-4">
            <Stat title="Total Transactions" value={statistics.totalTransactions}/>
            <Stat title="Total Income" value={`$ ${statistics.totalIncome}`}/>
            <Stat title="Total Expenses" value={`$ ${statistics.totalExpenses}`}/>
        </div>
    )
}

export default Stats