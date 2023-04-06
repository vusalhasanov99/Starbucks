import React from 'react'
import './favoriteProducts.css'
import { NavLink } from 'react-router-dom'

function FavoriteProducts() {
    return (
        <div className='favoriteProducts'>
            <h1>Favorite Products</h1>
            <div className="previousOrdersImg">
                <img src="https://www.starbucks.com/weblx/images/fav-tapes.png" alt="favoriteProducts" />
            </div>
            <h2>Save your favorite mixes</h2>
            <p>Use the heart to save customizations. Your favorites will appear here to order again.</p>
            <div className="previosOrdersBtns">
                <NavLink to=""><button className='btn btnOutline'>Sign in</button></NavLink>
                <NavLink to=""><button className='btn btnDark'>Join now</button></NavLink>
            </div>
        </div>
    )
}

export default FavoriteProducts
