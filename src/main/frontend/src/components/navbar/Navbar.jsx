import React from 'react'

const Navbar = ({balance}) => {
  return (
    <div className="flex items-center justify-between bg-white px-10 py-5 rounded-lg shadow">
        <h2 className="text-3xl">Expense Tracker</h2>
        <div className="flex flex-col">
            <h4 className="text-gray-700">BALANCE</h4>
            <h3 className="text-2xl"> <span>$</span> {balance}</h3>
        </div>
    </div>
  )
}

export default Navbar