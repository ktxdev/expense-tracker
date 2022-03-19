import React, { useEffect, useState } from 'react'
import axios from 'axios'
import TransactionsTable from './TransactionsTable'
import NoTransactions from './NoTransactions'
import NewTransactionModal from './NewTransactionModal'
import { useSpinner } from '../context/SpinnerContext'
import { useAlert } from '../context/AlertContext'
import Pagination from './Pagination'

const Income = ({ onAdd, onEdit, onDelete }) => {

  const [isEdit, setIsEdit] = useState(false)

  const [showTransactionModal, setShowTransactionModal] = useState(false)

  const [transactions, setTransactions] = useState([])

  const [pagination, setPagination] = useState({ totalPages: 2, currentPage: 0 })

  const initTransactionState = { id: 0, description: '', amount: 0, type: 'INCOME' }
  const [transaction, setTransaction] = useState(initTransactionState)

  const { showSpinner, hideSpinner } = useSpinner()

  const { showSuccess, showError } = useAlert()

  const baseUrl = "https://ktxdev-expense-tracker.herokuapp.com/api/v1/transactions"

  useEffect(() => {
    fetchIncomeTransactions()
  }, [])

  const toggleShowTransactionModal = () => {
    setShowTransactionModal(!showTransactionModal)
  }

  const cancel = () => {
    setTransaction(initTransactionState)
    toggleShowTransactionModal()
  }

  const changePage = (page) => {
    console.log('Current: ' + pagination.currentPage + '\nNew: ' + page);
    if (page - 1 < 0 || page - 1 >= pagination.totalPages) return
    fetchIncomeTransactions(page=page - 1)
  }

  const save = async () => {
    showSpinner()
    const response = isEdit ? await axios.put(`${baseUrl}/${transaction.id}`, transaction).catch(err => {
      hideSpinner()
      showError(err)
    })  : await axios.post(`${baseUrl}`, transaction).catch(err => {
      hideSpinner()
      showError(err)
    })
    hideSpinner()
    if (response.status === 201 || response.status == 200) {
      if (isEdit) {
        showSuccess("Transaction updated successfully!")
        const newTransactions = transactions.map(t => (t.id == transaction.id) ? response.data : t)
        setTransactions(newTransactions)
      } else {
        showSuccess("Transaction added successfully!")
        setTransactions([...transactions, response.data])
      }
      toggleShowTransactionModal()
    } else {
      showError(response)
    }
  }

  const edit = async (id) => {
    const trans = transactions.filter(t => t.id == id)[0]
    setTransaction(trans)
    setIsEdit(true)
    toggleShowTransactionModal()
  }

  const fetchIncomeTransactions = async (page = 0, size = 10) => {
    const response = await axios.get(`${baseUrl}?type=INCOME&page=${page}&size=${size}`);
    if (response.status === 200) {
      const data = response.data;
      setTransactions(data.content)
      setPagination({ totalPages: data.totalPages, currentPage: data.number + 1 })
    }
  }

  return (
    <div>
      {showTransactionModal && <NewTransactionModal transaction={transaction} setTransaction={setTransaction} onCancel={cancel} onSave={save} />}
      <h2 className="text-3xl tracking-wider mb-4">Income</h2>
      <div className='bg-white w-full max-h-full px-4 py-4'>
        <button onClick={toggleShowTransactionModal} className='py-1 px-8 bg-green-500 rounded-md hover:bg-green-600 text-white transition-colors duration-300 ease-in-out'>New</button>
        <div className="border-b border-gray-200 py-2"></div>
        {
          transactions.length == 0 ? <NoTransactions /> : <TransactionsTable transactions={transactions} onEdit={edit} onDelete={onDelete} />
        }
        <Pagination pagination={pagination} changePage={changePage} />
      </div>
    </div>
  )
}

export default Income