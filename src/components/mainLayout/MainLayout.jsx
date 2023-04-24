import React from 'react'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import { Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux';
import SignIn from '../signIn/SignIn';
import JoinNow from '../joinNow/JoinNow';

function MainLayout() {
  const user = useSelector((state) => state.auth);
  return (
    <div>
      {user.user? <>
        <Header />
        <Outlet />
        <Footer />
      </> : <SignIn /> || <JoinNow />}
    </div>
  )
}

export default MainLayout
