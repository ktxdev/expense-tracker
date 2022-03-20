import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";
import SideNav from "./components/SideNav";
import { Route, Routes } from 'react-router-dom'
import Expenses from "./components/Expenses";
import Income from "./components/Income";
import { useEffect, useState } from "react";
import axios from "axios";
import Modal from "./components/Modal";
import { useSpinner } from "./context/SpinnerContext";
import { useAlert } from "./context/AlertContext";
import ConfirmDeleteModal from "./components/ConfirmDeleteModal";
import NewTransactionModal from "./components/NewTransactionModal";
import { addTransaction, updateTransaction } from "./service/transactions-service";

const BASE_URL = "https://ktxdev-expense-tracker.herokuapp.com/api/v1/transactions"

const App = () => {

  const [showAddEditModal, setShowAddEditModal] = useState(false)
  const initialDeleteConfirmation = { show: false, transaction: undefined }
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(initialDeleteConfirmation)
  const [isEdit, setIsEdit] = useState(false)
  const initTransactionState = { id: 0, description: '', amount: 0, type: 'INCOME' }
  const [transaction, setTransaction] = useState(initTransactionState)
  const [transactions, setTransactions] = useState([])

  const { showSpinner, hideSpinner } = useSpinner()
  const { showError, showSuccess } = useAlert()

  const hideAddEditModal = () => {
    setTransaction(initTransactionState)
    toggleAddEditModal()
  }

  const toggleAddEditModal = () => {
    setShowAddEditModal(!showAddEditModal)
  }

  const handleError = (err) => {
    hideSpinner()
    showError(err)
  }

  const saveTransaction = async () => {
    showSpinner()

    if (isEdit) {
      updateTransaction(transaction).then(res => {
        hideSpinner()
        showSuccess("Transaction updated successfully!")
        const newTransactions = transactions.map(t => (t.id == transaction.id) ? res.data : t)
        setTransactions(newTransactions)
      }).catch( err => {
        handleError(err)
      });
    } else {
      addTransaction(transaction).then(res => {
        hideSpinner()
        showSuccess("Transaction added successfully!")
        setTransactions([...transactions, res.data])
      }).catch(err => {
        handleError(err)
      })
    }

    toggleAddEditModal()
  }

  const confirmDeleteTransaction = (id) => {
    const currentTransaction = transactions.filter(t => t.id == id)[0];
    setShowDeleteConfirmation({ show: true, transaction: currentTransaction })
  }

  const deleteTransaction = async () => {
    showSpinner()
    const response = await axios.delete(`${BASE_URL}/${showDeleteConfirmation.transaction.id}`)
    hideSpinner()
    if (response.status === 204) {
      setTransactions(transactions.filter(t => t.id !== showDeleteConfirmation.transaction.id))
      setShowDeleteConfirmation(initialDeleteConfirmation)
      showSuccess('Transactions deleted successfully')
    }
  }

  const editTransaction = (id) => {
    const currentTransaction = transactions.filter(t => t.id == id)[0]
    setTransaction(currentTransaction)
    setIsEdit(true)
    toggleAddEditModal()
  }

  return (
    <>
      {showAddEditModal && <NewTransactionModal transaction={transaction} setTransaction={setTransaction} onCancel={hideAddEditModal} onSave={saveTransaction} />}

      {showDeleteConfirmation.show && <ConfirmDeleteModal description={showDeleteConfirmation.transaction.description}
        onCancel={() => setShowDeleteConfirmation(initialDeleteConfirmation)}
        onConfirm={deleteTransaction} />}

      <div className="flex flex-col w-full h-screen max-h-screen bg-gray-100 p-10">
        <Navbar balance="0" />
        <div className="flex flex-grow space-x-4">
          <SideNav />
          <div className="w-full flex flex-col">
            <Routes>
              <Route path="/" element={<Dashboard transactions={transactions} setTransactions={setTransactions} showAddEditModal={toggleAddEditModal} editTransaction={editTransaction} confirmDeleteTransaction={confirmDeleteTransaction} />} />
              <Route path="/expenses" element={<Expenses transactions={transactions} setTransactions={setTransactions} showAddEditModal={toggleAddEditModal} editTransaction={editTransaction} confirmDeleteTransaction={confirmDeleteTransaction} />} />
              <Route path="/income" element={<Income transactions={transactions} setTransactions={setTransactions} showAddEditModal={toggleAddEditModal} editTransaction={editTransaction} confirmDeleteTransaction={confirmDeleteTransaction} />} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
