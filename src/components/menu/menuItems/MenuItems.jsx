import React from 'react'
import './MenuItems.css'
import { NavLink } from 'react-router-dom'

function MenuItems() {
    return (
        <div className='menuItems'>
            <ul>
                <li><ul><span>Drinks</span>
                    <li><NavLink to="drinks/oleato">Oleato™</NavLink></li>
                    <li><NavLink  to="drinks/hot-coffees">Hot Coffees</NavLink></li>
                    <li><NavLink  to="drinks/hot-teas">Hot Teas</NavLink></li>
                    <li><NavLink  to="drinks/hot-drinks">Hot Drinks</NavLink></li>
                    <li><NavLink  to="drinks/frappuccino-blended-beverages">Frappuccino® Blended Beverages</NavLink></li>
                    <li><NavLink  to="drinks/cold-coffees">Cold Coffees</NavLink></li>
                    <li><NavLink to="drinks/iced-teas">Iced Teas</NavLink></li>
                    <li><NavLink to="drinks/cold-drinks">Cold Drinks</NavLink></li></ul>
                </li>
                <li><ul><span>Food</span>
                    <li><NavLink to="food/hot-breakfast">Hot Breakfast</NavLink></li>
                    <li><NavLink to="food/oatmeal-yogurt">Oatmeal & Yogurt</NavLink></li>
                    <li><NavLink to="food/bakery">Bakery</NavLink></li>
                    <li><NavLink to="food/lunch">Lunch</NavLink></li>
                    <li><NavLink to="snacks-sweets">Snacks & Sweets</NavLink></li></ul>
                </li>
                <li><ul><span>At Home Coffee</span>
                    <li><NavLink to="at-home-coffee/whole-bean">Whole Bean</NavLink></li>
                    <li><NavLink to="at-home-coffee/via-instant">VIA® Instant</NavLink></li></ul>
                </li>
                <li><ul><span>Merchandise</span>
                    <li><NavLink to="merchandise/cold-cups">Cold Cups</NavLink></li>
                    <li><NavLink to="merchandise/tumblers">Tumblers</NavLink></li>
                    <li><NavLink to="/merchandise/mugs">Mugs</NavLink></li>
                    <li><NavLink to="merchandise/water-bottles">Water Bottles</NavLink></li>
                    <li><NavLink to="merchandise/other">Other</NavLink></li></ul>
                </li>
                <li><ul><span>Gift Cards</span>
                    <li><NavLink to="gift-cards/happy-birthday">Happy Birthday</NavLink></li>
                    <li><NavLink to="gift-cards/thank-you">Thank You</NavLink></li>
                    <li><NavLink to="gift-cards/traditional">Traditional</NavLink></li></ul>
                </li>
            </ul>
        </div>
    )
}

export default MenuItems
