import React, { useEffect, useRef } from 'react'
import './NavMenu.css'
import { NavLink, useLocation } from 'react-router-dom'

function NavMenu() {
    const linkRef = useRef()
    const location = useLocation()
    useEffect(() => {
        if (location.pathname !== "/menu") {
            linkRef.current.classList.remove('active')
        } else {
            linkRef.current.classList.add('active')
        }
    }, [location.pathname])

    return (
        <nav className='navMenu'>
            <ul className='d-flex container'>
                <li><NavLink to="/menu/all" ref={linkRef} className="allProduct">All products</NavLink></li>
                <li><NavLink to="/menu/featured">Featured</NavLink></li>
                <li><NavLink to="/menu/previous">Previous Orders</NavLink></li>
                <li><NavLink to="/menu/favorites">Favorite Products</NavLink></li>
            </ul>
        </nav>
    )
}

export default NavMenu
