import React, { useEffect, useState } from 'react'
import axios from 'axios'
import TransactionsTable from './transactions/table/TransactionsTable'
import NoTransactions from './NoTransactions'

const Income = ({onEdit, onDelete}) => {

  const [transactions, setTransactions] = useState([])

  useEffect(() => {
    fetchIncomeTransactions()
  }, [])

  const fetchIncomeTransactions = async () => {
    try {
      const response = await axios.get('https://ktxdev-expense-tracker.herokuapp.com/api/v1/transactions?type=INCOME');
      if (response.status === 200) {
        setTransactions(response.data.content)
      }
    } catch (err) {
      console.log(err.message);
    }
  }

  return (
    <div>
      <h2 className="text-3xl tracking-wider mb-4">Income</h2>
      <div className='bg-white w-full max-h-full'>
        {
          transactions.length == 0 ? <NoTransactions /> : <TransactionsTable transactions={transactions} onEdit={onEdit} onDelete={onDelete}/>
        }
      </div>
    </div>
  )
}

export default Income