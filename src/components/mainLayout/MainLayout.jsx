import React from 'react'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import { Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux';
import SignIn from '../signIn/SignIn';
import JoinNow from '../joinNow/JoinNow';
import { Helmet } from 'react-helmet';

function MainLayout() {
  const user = useSelector((state) => state.auth);
  return (
    <div>
      {user.user? <>
        <Header />
        <Outlet />
        <Footer />
      </> : <SignIn /> || <JoinNow />}
      <Helmet>
        <title>Starbucks Coffee Company</title>
      </Helmet>
    </div>
  )
}

export default MainLayout
