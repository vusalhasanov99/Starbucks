import React from 'react'
import './AllProducts.css'
import MenuItems from '../menuItems/MenuItems'
import { Outlet } from 'react-router-dom'

function AllProducts() {

  return (
    <div className='d-flex allProducts'> 
      <MenuItems />
     <Outlet/>
 
    </div>
  )
}

export default AllProducts
