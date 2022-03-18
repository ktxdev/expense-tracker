import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const SideNav = () => {
  const nonActiveClasses = "block p-5 cursor-pointer hover:bg-gray-100 hover:text-black"
  const activeClasses = "bg-gray-100 text-blue-500"

  return (
    <div className="bg-white w-72 h-full rounded-lg shadow overflow-hidden">
        <NavLink to="/" className={({ isActive }) => isActive ? `${nonActiveClasses} ${activeClasses}` : `${nonActiveClasses}`}>Dashboard</NavLink>
        <NavLink to="/income" className={({ isActive }) => isActive ? `${nonActiveClasses} ${activeClasses}` : `${nonActiveClasses}`}>Income</NavLink>
        <NavLink to="/expenses" className={({ isActive }) => isActive ? `${nonActiveClasses} ${activeClasses}` : `${nonActiveClasses}`}>Expenses</NavLink>
    </div>
  )
}

export default SideNav