import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import NavMenu from './navMenu/NavMenu'
function Menu() {
  const location = useLocation()
  return (
    <div>
      {location.pathname !== "/menu/featured" && <NavMenu />}
      <div className="d-flex">
        <Outlet />
      </div>
    </div>
  )
}

export default Menu
