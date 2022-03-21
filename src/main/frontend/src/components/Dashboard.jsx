import React, { useEffect, useState } from 'react'
import { useAlert } from '../context/AlertContext';
import { fetchAllTransactions } from '../service/transactions-service';
import Spinner from './Spinner';
import Stats from "./Stats";
import TransactionsView from './TransactionsView';

const Dashboard = ({ transactions, setTransactions, pagination, setPagination, showAddEditModal, editTransaction, confirmDeleteTransaction }) => {

    const [isPageLoading, setIsPageLoading] = useState(true)

    const [statistics, setStatistics] = useState({ totalTransactions: 0, totalIncome: 0, totalExpense: 0 })

    const { showError } = useAlert();

    useEffect(async () => {
        setTransactions([])
        await getAllTransactions()
        await calculateStatisticsData()
        setIsPageLoading(false)
    }, [])

    const calculateStatisticsData = async () => {
        const totalTransactions = transactions.length
        const totalIncome = transactions.filter(t => t.type === "INCOME").map(t => t.amount).reduce((a, b) => a + b, 0)
        const totalExpense = transactions.filter(t => t.type === "EXPENSE").map(t => t.amount).reduce((a, b) => a + b, 0)
        setStatistics({totalTransactions, totalIncome, totalExpense })
    }

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