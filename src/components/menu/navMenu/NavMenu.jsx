import React from 'react'
import './NavMenu.css'
import { Link } from 'react-router-dom'

function NavMenu() {
    return (
        <nav className='navMenu'>
            <ul className='d-flex container'>
                <li><Link to="/menu">All products</Link></li>
                <li><Link to="/menu/featured">Featured</Link></li>
                <li><Link>Previous Orders</Link></li>
                <li><Link>Favorite Products</Link></li>
            </ul>
        </nav>
    )
}

export default NavMenu
