import React from 'react'
import SideNavItem from './sidenavitem/SideNavItem'

const SideNav = () => {
  return (
    <div className="bg-white w-52 rounded-lg shadow overflow-hidden">
        <SideNavItem title="Income" />
        <SideNavItem title="Expenses" />
    </div>
  )
}

export default SideNav