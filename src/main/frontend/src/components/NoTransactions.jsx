import React from 'react'
import emptyBoxIcon from '../assets/empty-box.png'

const NoTransactions = () => {
  return (
    <div className='flex flex-col items-center justify-center py-16'>
        <img src={emptyBoxIcon} alt="Empty" width="100" height="100" />
        <h4 className='text-xl text-gray-700 mt-4'>Oops, no transactions found</h4>
    </div>
  )
}

export default NoTransactions