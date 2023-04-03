import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MainLayout from './components/mainLayout/MainLayout'
import Menu from './components/menu/Menu'
import Main from './components/main/Main'
import Food from './components/menu/allProducts/Food'
import AllProducts from './components/menu/allProducts/AllProducts'
import Feautured from './components/featured/Feautured'

function Routing() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route index element={<Main />} />
          <Route path='menu' element={<Menu />} >
            <Route index element={<AllProducts />} />
            <Route path='drinks/oleato' element={<Food />} />
          </Route>
          <Route path='/menu/featured' element={<Feautured />} />

        </Route>
      </Routes>
    </div>
  )
}

export default Routing
