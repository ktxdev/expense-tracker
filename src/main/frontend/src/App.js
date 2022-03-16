import Dashboard from "./components/Dashboard";
import Navbar from "./components/navbar/Navbar";
import SideNav from "./components/sidenav/SideNav";
import { Route, Routes } from 'react-router-dom'
import Expenses from "./components/Expenses";
import Income from "./components/Income";
import { useEffect, useState } from "react";
import axios from "axios";

const BASE_URL = "https://ktxdev-expense-tracker.herokuapp.com/api/v1/transactions"

const App = () => {

  const [balance, setBalance] = useState(0)
  const [transactions, setTransactions] = useState([])

  useEffect(() => {
    fetchTransactions()
  }, [])
  
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

    console.log(transactions);
  }

  return (
    <div className="flex flex-col w-full h-screen max-h-screen bg-gray-100 p-10">
        <Navbar balance={balance} />
        <div className="flex flex-grow space-x-4">
          <SideNav />
          <div className="w-full flex flex-col">
            <Routes>
              <Route path="/" element={<Dashboard onAddTransaction={addTransaction} />}/>
              <Route path="/expenses" element={<Expenses />}/>
              <Route path="/income" element={<Income />}/>
            </Routes>
          </div>
        </div>
      </div>
  );
}

export default App;
