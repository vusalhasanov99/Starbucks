import React from 'react'
import Logo from './Logo'
import Navbar from './Navbar'
import ResponsiveHeader from './responsiveHeader/ResponsiveHeader'
function Header() {
  return (
    <header>
      <div className="container d-flex jb">
        <Logo />
        <Navbar />
        <ResponsiveHeader/>
      </div>
    </header>
  )
}

export default Header
