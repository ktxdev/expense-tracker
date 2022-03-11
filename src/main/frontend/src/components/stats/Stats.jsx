import React, { useState } from 'react'
import Stat from './stat/Stat'

const Stats = () => {
    const [stats, setStats] = useState([
        { title: "Today's Transactions", value: 0 },
        { title: "Total Transactions", value: 1 },
        { title: "Total Income", value: "$ 38000.00" },
        { title: "Total Expences", value: "$ 0.00" },
    ])
    return (
        <div className="flex space-x-2 mb-4">
            { stats.map(stat => <Stat stat={stat} />)}
        </div>
    )
}

export default Stats