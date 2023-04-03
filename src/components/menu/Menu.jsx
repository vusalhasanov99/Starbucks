import React from 'react'
import { Outlet } from 'react-router-dom'
import NavMenu from './navMenu/NavMenu'
import MenuItems from './menuItems/MenuItems'
import AllProducts from './allProducts/AllProducts'

function Menu() {
  return (
    <div>
      <NavMenu />
      <div className="d-flex">
        <MenuItems />
       <Outlet/>

      </div>
    </div>
  )
}

export default Menu
