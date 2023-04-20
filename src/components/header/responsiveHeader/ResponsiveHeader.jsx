import React, { useState } from 'react'
import './ResponsiveHeader.css'
import { Link } from 'react-router-dom'
function ResponsiveHeader() {
    const [transform, setTransform] = useState(false)
    const [menuTransform, setMenuTransform] = useState(false)
    return (
        <div className='responsiveHeader' >
            <div className="menuIcon" onClick={() => setTransform(!transform)}>
            {!transform?    <svg aria-hidden="true" className="valign-middle absoluteCenter" focusable="false" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" style={{ width: "24px", height: "24px", overflow: "visible", fill: "currentcolor" }}><path className="sb-hamburgerButton-middleLine-CLOSED sb-hamburgerButton-animation" d="M21,12.9H3c-0.5,0-0.9-0.4-0.9-0.9s0.4-0.9,0.9-0.9h18c0.5,0,0.9,0.4,0.9,0.9S21.5,12.9,21,12.9z"></path><path className="sb-hamburgerButton-topLine-CLOSED sb-hamburgerButton-animation sb-hamburgerButton-animation-outer-lines" d="M21,6.9H3C2.5,6.9,2.1,6.5,2.1,6S2.5,5.1,3,5.1h18c0.5,0,0.9,0.4,0.9,0.9S21.5,6.9,21,6.9z"></path><path className="sb-hamburgerButton-bottomLine-CLOSED sb-hamburgerButton-animation sb-hamburgerButton-animation-outer-lines" d="M21,18.9H3c-0.5,0-0.9-0.4-0.9-0.9s0.4-0.9,0.9-0.9h18c0.5,0,0.9,0.4,0.9,0.9S21.5,18.9,21,18.9z"></path><circle className="sb-icon-hover" cx="50%" cy="50%" fill="transparent" r="75%"></circle></svg>
                : <i className="fa-solid fa-x" style={{fontSize:"20px"}}></i>
            }
            </div>
            <div className="menuHeader" style={{ transform: transform ? "translate(-90%)" : "translate(200%)" }}>
                <ul>
                    <li className='svgMenu' onClick={() => setMenuTransform(!menuTransform)}><span>MENU</span> <svg aria-hidden="true" className="valign-middle " focusable="false" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" style={{ width: "24px", height: "24px", overflow: "visible", fill: "currentcolor" }}><path d="M8.902 17.656c-.293.293-.293.768 0 1.06.293.294.768.294 1.06 0L16.38 12.3c.293-.293.293-.768 0-1.06L9.86 4.72c-.293-.293-.767-.293-1.06 0-.293.293-.293.767 0 1.06l5.99 5.99L8.9 17.656z"></path></svg></li>
                    <li onClick={() => setTransform(false)}><Link to="/rewards">REWARDS</Link></li>
                    <li onClick={() => setTransform(false)}><Link to="/gift">GIFT CARDS</Link></li>
                </ul>
                <hr />
                <div>
                    <div>
                        <Link to="account/signin"><button className='btn btnOutline'>Sign in</button></Link>
                        <Link to="account/joinnow"><button className='btn btnDark'>Join now</button></Link></div>
                    <div>   <a href="findstore" className='findAStore'><svg aria-hidden="true" className="valign-middle pr2" focusable="false" preserveAspectRatio="xMidYMid meet" style={{ width: "32px", height: "32px", overflow: "visible", fill: "currentColor" }} viewBox="0 0 24 24"><path d="M12,11.475 C10.5214286,11.475 9.32142857,10.299 9.32142857,8.85 C9.32142857,7.401 10.5214286,6.225 12,6.225 C13.4785714,6.225 14.6785714,7.401 14.6785714,8.85 C14.6785714,10.299 13.4785714,11.475 12,11.475 M12,1.5 C7.85357143,1.5 4.5,4.7865 4.5,8.85 C4.5,14.3625 12,22.5 12,22.5 C12,22.5 19.5,14.3625 19.5,8.85 C19.5,4.7865 16.1464286,1.5 12,1.5"></path></svg>Find a store</a>
                    </div>
                </div>
                <div className="menuAllProducts" style={{ transform: menuTransform ? "translate(-12%)" : "translate(200%)" }}>
                    <ul>
                        <li className='MenuBack' onClick={()=>setMenuTransform(false)}><svg aria-hidden="true" className="valign-middle sb-hamburgerNav-pushViewButton-left-arrow" focusable="false" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" style={{width: "24px", height: "24px", overflow: "visible", fill: "currentcolor"}}><path d="M15.098 5.78c.292-.293.292-.767 0-1.06-.293-.293-.768-.293-1.06 0L7.62 11.137c-.293.293-.293.768 0 1.06l6.52 6.52c.292.293.767.293 1.06 0 .293-.293.293-.768 0-1.06l-5.99-5.99L15.1 5.78z"></path></svg><span>MENU</span> </li>
                        <li onClick={() => setTransform(false)}><Link to="/menu">All products</Link></li>
                        <li onClick={() => setTransform(false)}><Link to="/menu/featured">Featured</Link></li>
                        <li onClick={() => setTransform(false)}><Link to="/menu/previous">Previous</Link></li>
                        <li onClick={() => setTransform(false)}><Link to="/menu/favorites">Favorites</Link></li>
                    </ul>
                    <div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ResponsiveHeader
