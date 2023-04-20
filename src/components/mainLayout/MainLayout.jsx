import React from 'react'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import { Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux';
import SignIn from '../signIn/SignIn';
import JoinNow from '../joinNow/JoinNow';

function MainLayout() {
  const logIn = useSelector((state) => state.login.value);

  return (
    <div>

      {logIn ? <>
        <Header />
        <Outlet />
        <Footer />
      </> : <SignIn /> || <JoinNow />}
    </div>
  )
}

export default MainLayout
