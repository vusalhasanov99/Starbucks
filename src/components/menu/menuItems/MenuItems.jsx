import React from 'react'
import './MenuItems.css'
import { Link } from 'react-router-dom'

function MenuItems() {
    return (
        <div className='menuItems'>
            <ul>
                <li><ul><span>Drinks</span>
                    <li><Link to="drinks/oleato">Oleato™</Link></li>
                    <li><Link  to="drinks/hot-coffees">Hot Coffees</Link></li>
                    <li><Link  to="drinks/hot-teas">Hot Teas</Link></li>
                    <li><Link  to="drinks/hot-drinks">Hot Drinks</Link></li>
                    <li><Link  to="drinks/frappuccino-blended-beverages">Frappuccino® Blended Beverages</Link></li>
                    <li><Link  to="drinks/cold-coffees">Cold Coffees</Link></li>
                    <li><Link to="drinks/iced-teas">Iced Teas</Link></li>
                    <li><Link to="drinks/cold-drinks">Cold Drinks</Link></li></ul>
                </li>
                <li><ul><span>Food</span>
                    <li><Link to="food/hot-breakfast">Hot Breakfast</Link></li>
                    <li><Link to="food/oatmeal-yogurt">Oatmeal & Yogurt</Link></li>
                    <li><Link to="food/bakery">Bakery</Link></li>
                    <li><Link to="food/lunch">Lunch</Link></li>
                    <li><Link to="snacks-sweets">Snacks & Sweets</Link></li></ul>
                </li>
                <li><ul><span>At Home Coffee</span>
                    <li><Link to="at-home-coffee/whole-bean">Whole Bean</Link></li>
                    <li><Link to="at-home-coffee/via-instant">VIA® Instant</Link></li></ul>
                </li>
                <li><ul><span>Merchandise</span>
                    <li><Link to="merchandise/cold-cups">Cold Cups</Link></li>
                    <li><Link to="merchandise/tumblers">Tumblers</Link></li>
                    <li><Link to="/merchandise/mugs">Mugs</Link></li>
                    <li><Link to="merchandise/water-bottles">Water Bottles</Link></li>
                    <li><Link to="merchandise/other">Other</Link></li></ul>
                </li>
                <li><ul><span>Gift Cards</span>
                    <li><Link to="gift-cards/happy-birthday">Happy Birthday</Link></li>
                    <li><Link to="gift-cards/thank-you">Thank You</Link></li>
                    <li><Link to="gift-cards/traditional">Traditional</Link></li></ul>
                </li>
            </ul>
        </div>
    )
}

export default MenuItems
