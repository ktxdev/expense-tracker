import React, { useEffect, useState } from 'react'
import { useAlert } from '../context/AlertContext';
import { fetchAllTransactions } from '../service/transactions-service';
import TransactionsView from './TransactionsView';

const Expenses = ({ transactions, setTransactions, showAddEditModal, editTransaction, confirmDeleteTransaction }) => {

  const [pagination, setPagination] = useState({ page: 0, size: 10, totalPages: 0 })

  const { showError } = useAlert();

  useEffect(() => {
    setTransactions([])
    fetchExpenseTransactions()
  }, [])

  const fetchExpenseTransactions = async () => {
    const response = await fetchAllTransactions(pagination.page, pagination.size, 'EXPENSE')
    if (response.status === 200) {
      const data = response.data;
      setTransactions(data.content)
    } else {
      showError(response)
    }
  }

  return (
    <TransactionsView title="Expenses" transactions={transactions} showAddEditModal={showAddEditModal} editTransaction={editTransaction} confirmDeleteTransaction={confirmDeleteTransaction} />
  )
}

export default Expenses