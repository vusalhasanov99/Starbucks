import React from 'react'
import Logo from './Logo'
import Navbar from './Navbar'


function Header() {
  return (
    <header>
      <div className="container">
        <Logo />
        <Navbar />
      </div>
    </header>
  )
}

export default Header
