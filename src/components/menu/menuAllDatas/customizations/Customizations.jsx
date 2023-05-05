import React from 'react'
import './Customizations.css'
function Customizations() {
    return (
        <div className='customizations'>
            <h1>Customizations</h1>
            <div className="flavors ">
                <div><p>1 pump(s) Vanilla Syrup</p> <button>Edit</button>
                <span>Flavors</span></div>
                <div><p>Toppings</p> <button>Edit</button></div>
                <div><p>Preparation Method</p> <button>Edit</button></div>
                <div><p>Tea</p> <button>Edit</button></div>
                <div><p>Ice</p> <button>Edit</button></div>
                <div><p>Sweeteners</p> <button>Edit</button></div>
            </div>
        </div>
    )
}

export default Customizations
