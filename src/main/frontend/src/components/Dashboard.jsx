import React, { useEffect, useState } from 'react'
import { useAlert } from '../context/AlertContext';
import { getStatistics } from '../service/dashboard-service';
import { fetchAllTransactions } from '../service/transactions-service';
import Spinner from './Spinner';
import Stats from "./Stats";
import TransactionsView from './TransactionsView';

const Dashboard = ({ transactions, statistics, setTransactions, pagination, setPagination, showAddEditModal, editTransaction, confirmDeleteTransaction }) => {

    const [isPageLoading, setIsPageLoading] = useState(true)

    const { showError } = useAlert();

    useEffect(async () => {
        document.title = "Expense Tracker - Dashboard"
        setTransactions([])
        await getAllTransactions()
        setIsPageLoading(false)
    }, [])

    const changePage = async (page) => {
        if (page < 0 || page >= pagination.totalPages) return;
        setIsPageLoading(true)
        await getAllTransactions(page)
        setIsPageLoading(false)
    }

    const getAllTransactions = async (page = 0) => {
        const response = await fetchAllTransactions(page, pagination.size)
        if (response.status === 200) {
            const data = response.data;
            setTransactions(data.content)
            setPagination({ ...pagination, page: data.number, totalPages: data.totalPages })
        } else {
            showError(response)
        }
    }

    return (
        !isPageLoading ?
            <>
                <Stats statistics={statistics} />
                <TransactionsView title="All Transactions" transactions={transactions} changePage={changePage} pagination={pagination} showAddEditModal={showAddEditModal} editTransaction={editTransaction} confirmDeleteTransaction={confirmDeleteTransaction} />
            </> : <Spinner />
    )
}

export default Dashboard