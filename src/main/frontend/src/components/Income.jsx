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

const Income = ({ transactions, setTransactions, showAddEditModal, editTransaction, confirmDeleteTransaction }) => {

  const [pagination, setPagination] = useState({ page: 0, size: 10, totalPages: 0 })

  const { showError } = useAlert();

  useEffect(() => {
    setTransactions([])
    fetchIncomeTransactions()
  }, [])

  const fetchIncomeTransactions = async () => {
    const response = await fetchAllTransactions(pagination.page, pagination.size, 'INCOME')
    if (response.status === 200) {
      const data = response.data;
      setTransactions(data.content)
    } else {
      showError(response)
    }
  }

  return (
    <TransactionsView title="Income" transactions={transactions} showAddEditModal={showAddEditModal} editTransaction={editTransaction} confirmDeleteTransaction={confirmDeleteTransaction} />
  )
}

export default Income