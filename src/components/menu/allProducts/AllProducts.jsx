import React from 'react'
import Drinks from './Oleato'
import Food from './Food'
import AtHomeCoffee from './AtHomeCoffee'
import Merchandise from './Merchandise'
import GiftCards from './GiftCards'
import MenuItems from '../menuItems/MenuItems'
import { Outlet } from 'react-router-dom'

function AllProducts() {

  return (
    <div className='d-flex'> 
      <MenuItems />
     <Outlet/>
 
    </div>
  )
}

export default AllProducts
