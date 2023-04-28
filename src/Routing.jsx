import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MainLayout from './components/mainLayout/MainLayout'
import Menu from './components/menu/Menu'
import Main from './components/main/Main'
import AllProducts from './components/menu/allProducts/AllProducts'
import Feautured from './components/menu/featured/Feautured'
import PreviousOrders from './components/menu/previousOrders/PreviousOrders'
import FavoriteProducts from './components/menu/favoriteProducts/FavoriteProducts'
import Rewards from './components/rewards/Rewards'
import GiftCards from './components/giftCards/GiftCards'
import SignIn from './components/signIn/SignIn'
import JoinNow from './components/joinNow/JoinNow'
import FindStore from './components/findStore/FindStore'
import MenuAllDatas from './components/menu/menuAllDatas/MenuAllDatas'
import Featured from './components/giftCards/featured/Featured'
import ErrorPage from './components/errorPage/ErrorPage'
import Product from './components/menu/menuAllDatas/Product'

function Routing() {
  return (
    <Routes>
      <Route path='/' element={<MainLayout />}>
        <Route index element={<Main />} />
        <Route path='menu' element={<Menu />} >
          <Route path='all' element={<AllProducts />}>
            {/* <Route index element={<MenuAllDatas />} /> */}
            <Route path=':category/:subcategory' element={<MenuAllDatas />} />
          </Route>

          <Route path='featured' element={<Feautured />} />
          <Route path='previous' element={<PreviousOrders />} />
          <Route path='favorites' element={<FavoriteProducts />} />
        </Route>
        <Route path='menu/all/:category/:subcategory/:product' element={<Product />} />

        <Route path='rewards' element={<Rewards />} >
        </Route>
        <Route path='gift' element={<GiftCards />} />
        <Route path='gift/category/:category' element={<Featured />} />
        <Route path='findstore' element={<FindStore />} />
        <Route path='account/signin' element={<SignIn />} />
        <Route path='account/joinnow' element={<JoinNow />} />
        <Route path='*' element={<ErrorPage />} />
      </Route>
    </Routes>
  )
}

export default Routing
