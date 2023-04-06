import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MainLayout from './components/mainLayout/MainLayout'
import Menu from './components/menu/Menu'
import Main from './components/main/Main'
import Food from './components/menu/allProducts/Food'
import AllProducts from './components/menu/allProducts/AllProducts'
import Feautured from './components/menu/featured/Feautured'
import PreviousOrders from './components/menu/previousOrders/PreviousOrders'
import FavoriteProducts from './components/menu/favoriteProducts/FavoriteProducts'
import Rewards from './components/rewards/Rewards'

function Routing() {
  return (
    <Routes>
      <Route path='/' element={<MainLayout />}>
        <Route index element={<Main />} />
        <Route path='menu' element={<Menu />} >
          <Route index element={<AllProducts />} />
          <Route path='featured' element={<Feautured />} />
          <Route path='previous' element={<PreviousOrders />} />
          <Route path='favorites' element={<FavoriteProducts />} />
          <Route path='drinks/oleato' element={<Food />} />
        </Route>

        <Route path='rewards' element={<Rewards />} >

        </Route>

      </Route>
    </Routes>
  )
}

export default Routing
