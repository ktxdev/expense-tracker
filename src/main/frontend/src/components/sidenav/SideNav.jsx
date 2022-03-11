import React from 'react'
import SideNavItem from './sidenavitem/SideNavItem'

const SideNav = () => {
  return (
    <div className="bg-white w-72 h-full rounded-lg shadow overflow-hidden">
        <SideNavItem title="Dashboard" />
        <SideNavItem title="Income" />
        <SideNavItem title="Expenses" />
    </div>
  )
}

export default SideNav