import React from 'react'
import Stats from "./Stats";
import Transactions from "./Transactions";

const Dashboard = ({onAddTransaction}) => {
    return (
        <>
            <Stats />
            <Transactions onAddTransaction={onAddTransaction} />
        </>
    )
}

export default Dashboard