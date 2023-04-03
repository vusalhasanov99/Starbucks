import React from 'react'
import Header from '../header/Header'
import Main from '../main/Main'
import Footer from '../footer/Footer'
import { Outlet } from 'react-router-dom'

function MainLayout() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default MainLayout
