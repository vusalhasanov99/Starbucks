import React, { useEffect, useRef } from 'react'
import './RewardsHeader.css'
function RewardsHeader() {
  const headerFixed = useRef()

  useEffect(() => {
    window.onscroll = function () { myFunction() };
    function myFunction() {
      if (document.documentElement.scrollTop > 112) {
        headerFixed.current.classList.add("headerFixed");
      } else {
        headerFixed.current.classList.remove("headerFixed");
      }
    }
  },[document.documentElement.scrollTop ])
  return (
    <div className='rewardsHeader' ref={headerFixed}>
      <h1>STARBUCKS<sup style={{fontSize:"7px"}}>®</sup> REWARDS</h1>
    </div>
  )
}

export default RewardsHeader
