import React from 'react'
import './Basket.css'
import { Link } from 'react-router-dom'
function Basket({ setModal}) {
    const total = localStorage.getItem('total');


    return (
        <div className='basket'>
            <div className="chooseStore">
                <Link to="/findstore" className='d-flex ac'>
                    <div className="store">
                        <p>For item availability</p>
                        <h2>Choose a store</h2>
                    </div>
                    <svg aria-hidden="true" className="valign-middle ml2 color-white" focusable="false" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" style={{ width: "18px", height: "18px", overflow: "visible", fill: "currentcolor" }}><path d="M11.96 15.5c-.206 0-.402-.084-.546-.232l-5.188-5.33c-.3-.31-.3-.81 0-1.12.3-.31.79-.31 1.093 0l4.64 4.767 4.723-4.853c.3-.31.79-.31 1.09 0 .303.31.303.812.002 1.122l-5.27 5.414c-.145.148-.34.232-.546.232"></path></svg>
                </Link>
            </div>

            <div className="basketIcon" onClick={() => setModal(false)}>
                {
                    !total?
                        <img src="https://www.starbucks.com/app-assets/d21adfaa60a934de88eb1cc00c315e52.svg" alt="" />
                        :
                        <img src="	https://www.starbucks.com/app-assets/9c51700b42896823747e5d9f27519d03.svg" alt="" />
                }
                <span className='total'>{total?total:0}</span>
            </div>
        </div>
    )
}

export default Basket
