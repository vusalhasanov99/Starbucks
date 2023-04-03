import React from 'react'
import Drinks from './Drinks'
import Food from './Food'
import AtHomeCoffee from './AtHomeCoffee'
import Merchandise from './Merchandise'
import GiftCards from './GiftCards'
import { Outlet } from 'react-router-dom'

function AllProducts() {

  return (
    <div>
      <Drinks/>
      <Food/>
      <AtHomeCoffee/>
      <Merchandise/>
      <GiftCards/>
    </div>
  )
}

export default AllProducts
