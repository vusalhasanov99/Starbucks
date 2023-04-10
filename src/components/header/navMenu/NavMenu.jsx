import React from 'react'
import './NavMenu.css'
function NavMenu() {
  return (
    <div >
         <ul>
                <li><NavLink to="/menu">MENU</NavLink></li>
                <li><NavLink to="/rewards">REWARDS</NavLink></li>
                <li><NavLink to="/gift">GIFT CARDS</NavLink></li>
            </ul>
    </div>
  )
}

export default NavMenu
