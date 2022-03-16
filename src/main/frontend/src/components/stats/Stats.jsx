import React from 'react'
import Stat from './stat/Stat'

const Stats = () => {
    
    return (
        <div className="flex space-x-2 mb-4">
            <Stat title="Today's Transactions" value="0"/>
            <Stat title="Total Transactions" value="1"/>
            <Stat title="Total Income" value="$ 0.00"/>
            <Stat title="Total Expenses" value="$ 0.00"/>
        </div>
    )
}

export default Stats