import React from 'react'
import './Header.css'
import { NavLink, useLocation } from 'react-router-dom'
import NavMenu from './navMenu/navMenu'

function Navbar() {
    const location = useLocation()
    return (
        <>
        <nav className='navbar' style={{display:location.pathname == "/account/signin" || location.pathname == "/account/joinnow"?"none":"" }}>
            <ul>
                <li><NavLink to="/menu">MENU</NavLink></li>
                <li><NavLink to="/rewards">REWARDS</NavLink></li>
                <li><NavLink to="/gift">GIFT CARDS</NavLink></li>
            </ul>
            <div className="navRight">
                <NavLink to="findstore" className='findAStore'><svg aria-hidden="true" className="valign-middle pr2" focusable="false" preserveAspectRatio="xMidYMid meet" style={{ width: "32px", height: "32px", overflow: "visible", fill: "currentColor" }} viewBox="0 0 24 24"><path d="M12,11.475 C10.5214286,11.475 9.32142857,10.299 9.32142857,8.85 C9.32142857,7.401 10.5214286,6.225 12,6.225 C13.4785714,6.225 14.6785714,7.401 14.6785714,8.85 C14.6785714,10.299 13.4785714,11.475 12,11.475 M12,1.5 C7.85357143,1.5 4.5,4.7865 4.5,8.85 C4.5,14.3625 12,22.5 12,22.5 C12,22.5 19.5,14.3625 19.5,8.85 C19.5,4.7865 16.1464286,1.5 12,1.5"></path></svg>Find a store</NavLink>
                <NavLink to="account/signin"><button className='btn btnOutline'>Sign in</button></NavLink>
                <NavLink to="account/joinnow"><button className='btn btnDark'>Join now</button></NavLink>
            </div>
        </nav>
            <div className="navMenu">
                <NavMenu/>
            <svg aria-hidden="true" class="valign-middle absoluteCenter" focusable="false" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" style={{width: "24px", height: "24px", overflow: "visible", fill: "currentcolor"}}><path class="sb-hamburgerButton-middleLine-CLOSED sb-hamburgerButton-animation" d="M21,12.9H3c-0.5,0-0.9-0.4-0.9-0.9s0.4-0.9,0.9-0.9h18c0.5,0,0.9,0.4,0.9,0.9S21.5,12.9,21,12.9z"></path><path class="sb-hamburgerButton-topLine-CLOSED sb-hamburgerButton-animation sb-hamburgerButton-animation-outer-lines" d="M21,6.9H3C2.5,6.9,2.1,6.5,2.1,6S2.5,5.1,3,5.1h18c0.5,0,0.9,0.4,0.9,0.9S21.5,6.9,21,6.9z"></path><path class="sb-hamburgerButton-bottomLine-CLOSED sb-hamburgerButton-animation sb-hamburgerButton-animation-outer-lines" d="M21,18.9H3c-0.5,0-0.9-0.4-0.9-0.9s0.4-0.9,0.9-0.9h18c0.5,0,0.9,0.4,0.9,0.9S21.5,18.9,21,18.9z"></path><circle class="sb-icon-hover" cx="50%" cy="50%" fill="transparent" r="75%"></circle></svg>
            </div>
        </>
    )
}

export default Navbar
