import React, { useState } from 'react'
import './ResponsiveHeader.css'
function ResponsiveHeader() {
    const [transform,setTransform]=useState(false)
    return (
        <div className='responsiveHeader' >
            <div className="menuIcon" onClick={()=>setTransform(!transform)}>
                <svg aria-hidden="true" class="valign-middle absoluteCenter" focusable="false" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" style={{ width: "24px", height: "24px", overflow: "visible", fill: "currentcolor" }}><path class="sb-hamburgerButton-middleLine-CLOSED sb-hamburgerButton-animation" d="M21,12.9H3c-0.5,0-0.9-0.4-0.9-0.9s0.4-0.9,0.9-0.9h18c0.5,0,0.9,0.4,0.9,0.9S21.5,12.9,21,12.9z"></path><path class="sb-hamburgerButton-topLine-CLOSED sb-hamburgerButton-animation sb-hamburgerButton-animation-outer-lines" d="M21,6.9H3C2.5,6.9,2.1,6.5,2.1,6S2.5,5.1,3,5.1h18c0.5,0,0.9,0.4,0.9,0.9S21.5,6.9,21,6.9z"></path><path class="sb-hamburgerButton-bottomLine-CLOSED sb-hamburgerButton-animation sb-hamburgerButton-animation-outer-lines" d="M21,18.9H3c-0.5,0-0.9-0.4-0.9-0.9s0.4-0.9,0.9-0.9h18c0.5,0,0.9,0.4,0.9,0.9S21.5,18.9,21,18.9z"></path><circle class="sb-icon-hover" cx="50%" cy="50%" fill="transparent" r="75%"></circle></svg>
            </div>
            <div className="menuHeader" style={{transform:transform? "translate(-90%)":"translate(20%)"}}>
                <ul>
                    <li className='svgMenu'><span>MENU</span> <svg aria-hidden="true" class="valign-middle " focusable="false" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" style={{width: "24px", height: "24px", overflow: "visible", fill: "currentcolor"}}><path d="M8.902 17.656c-.293.293-.293.768 0 1.06.293.294.768.294 1.06 0L16.38 12.3c.293-.293.293-.768 0-1.06L9.86 4.72c-.293-.293-.767-.293-1.06 0-.293.293-.293.767 0 1.06l5.99 5.99L8.9 17.656z"></path></svg></li>
                    <li><a href="/rewards">REWARDS</a></li>
                    <li><a href="/gift">GIFT CARDS</a></li>
                </ul>
                <hr />
                <div>
                    <div>
                         <a href="account/signin"><button className='btn btnOutline'>Sign in</button></a>
                        <a href="account/joinnow"><button className='btn btnDark'>Join now</button></a></div>
                    <div>   <a href="findstore" className='findAStore'><svg aria-hidden="true" className="valign-middle pr2" focusable="false" preserveAspectRatio="xMidYMid meet" style={{ width: "32px", height: "32px", overflow: "visible", fill: "currentColor" }} viewBox="0 0 24 24"><path d="M12,11.475 C10.5214286,11.475 9.32142857,10.299 9.32142857,8.85 C9.32142857,7.401 10.5214286,6.225 12,6.225 C13.4785714,6.225 14.6785714,7.401 14.6785714,8.85 C14.6785714,10.299 13.4785714,11.475 12,11.475 M12,1.5 C7.85357143,1.5 4.5,4.7865 4.5,8.85 C4.5,14.3625 12,22.5 12,22.5 C12,22.5 19.5,14.3625 19.5,8.85 C19.5,4.7865 16.1464286,1.5 12,1.5"></path></svg>Find a store</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ResponsiveHeader
