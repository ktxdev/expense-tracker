import React, { useEffect, useState } from 'react'
import axios from 'axios'
import TransactionsTable from './TransactionsTable'
import NoTransactions from './NoTransactions'
import NewTransactionModal from './NewTransactionModal'
import { useSpinner } from '../context/SpinnerContext'
import { useAlert } from '../context/AlertContext'
import Pagination from './Pagination'
import TransactionsView from './TransactionsView'
import { fetchAllTransactions } from '../service/transactions-service'
import Spinner from './Spinner'

const Income = ({ transactions, setTransactions, pagination, setPagination, showAddEditModal, editTransaction, confirmDeleteTransaction }) => {

  const [isPageLoading, setIsPageLoading] = useState(true)

  const { showError } = useAlert();

  useEffect(async () => {
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
    const response = await fetchAllTransactions(page, pagination.size, 'INCOME')
    if (response.status === 200) {
      const data = response.data;
      setTransactions(data.content)
      setPagination({ ...pagination, page: data.number, totalPages: data.totalPages})
    } else {
      showError(response)
    }
  }

  return (
    !isPageLoading ?
    <TransactionsView title="Income" transactions={transactions} changePage={changePage} pagination={pagination} showAddEditModal={showAddEditModal} editTransaction={editTransaction} confirmDeleteTransaction={confirmDeleteTransaction} />
    : <Spinner />
  )
}

export default Income