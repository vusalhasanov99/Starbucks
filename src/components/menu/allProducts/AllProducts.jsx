import React from 'react'
import './AllProducts.css'
import MenuItems from '../menuItems/MenuItems'
import { Outlet, useLocation } from 'react-router-dom'
import AllCategory from './allCategory/AllCategory'

function AllProducts() {
  const location = useLocation()
  return (
    <div className='d-flex allProducts'>
      
      <MenuItems />
      {location.pathname == "/menu/all" ?
        <AllCategory /> :
        <Outlet />
      }

    </div>
  )
}

export default AllProducts
