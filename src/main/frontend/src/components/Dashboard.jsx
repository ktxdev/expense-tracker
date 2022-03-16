import React from 'react'
import Stats from "./stats/Stats";
import Transactions from "./transactions/Transactions";

const Dashboard = ({onAddTransaction}) => {
    return (
        <>
            <Stats />
            <Transactions onAddTransaction={onAddTransaction} />
        </>
    )
}

export default Dashboard