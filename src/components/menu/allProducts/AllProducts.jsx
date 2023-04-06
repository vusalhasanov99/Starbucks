import React from 'react'
import Drinks from './Drinks'
import Food from './Food'
import AtHomeCoffee from './AtHomeCoffee'
import Merchandise from './Merchandise'
import GiftCards from './GiftCards'
import MenuItems from '../menuItems/MenuItems'

function AllProducts() {

  return (
    <>
      <MenuItems />
      <div>
        <Drinks />
        <Food />
        <AtHomeCoffee />
        <Merchandise />
        <GiftCards />
      </div>
    </>
  )
}

export default AllProducts
