import React from 'react'

const SideNavItem = ({title}) => {
  return (
    <div className="p-5 cursor-pointer hover:bg-gray-100 hover:text-black">{title}</div>
  )
}

export default SideNavItem