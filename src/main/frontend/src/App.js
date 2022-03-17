import Dashboard from "./components/Dashboard";
import Navbar from "./components/navbar/Navbar";
import SideNav from "./components/sidenav/SideNav";
import { Route, Routes } from 'react-router-dom'
import Expenses from "./components/Expenses";
import Income from "./components/Income";
import { useEffect, useState } from "react";
import axios from "axios";
import Modal from "./components/Modal";

const BASE_URL = "https://ktxdev-expense-tracker.herokuapp.com/api/v1/transactions"

const App = () => {

  const [balance, setBalance] = useState(0)
  const [transactions, setTransactions] = useState([])
  const [showDeleteConfirm, setShowDeleteConfirm] = useState({ show: false, transaction: {} })

  useEffect(() => {
    fetchTransactions()
  }, [])

  const toggleModal = () => {
    setShowDeleteConfirm({ ...showDeleteConfirm, show: !showDeleteConfirm.show })
  }

  const fetchTransactions = () => {
    console.log('Getting all transactions..');
    axios.get(BASE_URL).then(res => {
      setTransactions(res.data.content)
      calculateBalance(res.data.content)
    }).catch(err => {
      console.log(err);
    })
  }

  const calculateBalance = (data) => {
    const totalExpense = data.filter(t => t.type === "EXPENSE").map(t => t.amount)
    const totalIncome = data.filter(t => t.type === "INCOME").map(t => t.amount)
    const newBalance = totalIncome - totalExpense;
    setBalance(newBalance)
  }

  const addTransaction = async (transaction) => {
    await axios.post(BASE_URL, transaction).then(res => {
      setTransactions([...transactions, res.data])
      console.log(res.data);
    }).catch(err => {
      console.log(err);
    })
  }

  const onDelete = async (id) => {
    const trans = transactions.filter(t => t.id == id)[0];
    console.log(trans);
    setShowDeleteConfirm({ show: true, transaction: trans })
  }

  const deleteTransaction = async () => {
    const response = await axios.delete(`${BASE_URL}/${showDeleteConfirm.transaction.id}`)
    if (response.status === 204) {
      console.log("Deleted!");
      setShowDeleteConfirm({ ...showDeleteConfirm, show: false })
    }
  }

  const onEdit = (id) => {
    console.log(id);
  }

  return (
    <div className="flex flex-col w-full h-screen max-h-screen bg-gray-100 p-10">
      {
        showDeleteConfirm.show && <Modal>
          <div className="bg-white p-8 rounded-lg">
            <h2 className="text-2xl">Are you sure?</h2>
            <div className="border-b border-b-gray-200 mb-4 py-1"></div>
            <p className="py-4">Are you sure you want to delete transaction: <strong>{showDeleteConfirm.transaction.description}</strong> </p>
            <div className="flex justify-between py-4">
              <button onClick={toggleModal} className="py-2 px-8 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors duration-300 ease-in-out">Cancel</button>
              <button onClick={deleteTransaction} className="py-2 px-8 bg-green-500 rounded-md hover:bg-green-600 text-white transition-colors duration-300 ease-in-out">Confirm</button>
            </div>
          </div>
        </Modal>
      }
      <Navbar balance={balance} />
      <div className="flex flex-grow space-x-4">
        <SideNav />
        <div className="w-full flex flex-col">
          <Routes>
            <Route path="/" element={<Dashboard onAddTransaction={addTransaction} />} />
            <Route path="/expenses" element={<Expenses />} />
            <Route path="/income" element={<Income onEdit={onEdit} onDelete={onDelete} />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
