import React, { useEffect, useState } from 'react'
import { useAlert } from '../context/AlertContext';
import { fetchAllTransactions } from '../service/transactions-service';
import Stats from "./Stats";
import TransactionsView from './TransactionsView';

const Dashboard = ({transactions, setTransactions, showAddEditModal, editTransaction, confirmDeleteTransaction}) => {
    const [pagination, setPagination] = useState({ page: 0, size: 10, totalPages: 0 })

    const { showError } = useAlert();

    useEffect(() => {
        getAllTransactions()
    }, [])

    const getAllTransactions = async () => {
        const response = await fetchAllTransactions(pagination.page, pagination.size).catch(err => showError(err))
        if (response.status === 200) {
            const data = response.data;
            setTransactions(data.content)
        } else {
            showError(response)
        }
    }
    
    return (
        <>
            <Stats />
            <TransactionsView title="All Transactions" transactions={transactions} showAddEditModal={showAddEditModal} editTransaction={editTransaction} confirmDeleteTransaction={confirmDeleteTransaction} />
        </>
    )
}

export default Dashboard