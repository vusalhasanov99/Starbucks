import React from 'react'
import './PreviousOrders.css'
import { NavLink } from 'react-router-dom'

function PreviousOrders() {
    return (
        <div className='previousOrders'>
            <h1>Previous Orders</h1>
            <div className="previousOrdersImg">
                <img src="https://www.starbucks.com/weblx/images/moon-phases.gif" alt="previousOrdersImg" />
            </div>
            <h2>When history repeats itself</h2>
            <p>Previous orders will appear here to quickly order again.</p>
            <div className="previosOrdersBtns">
                <NavLink to=""><button className='btn btnOutline'>Sign in</button></NavLink>
                <NavLink to=""><button className='btn btnDark'>Join now</button></NavLink>
            </div>
        </div>
    )
}

export default PreviousOrders
