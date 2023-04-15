import React from 'react'
import { Link } from 'react-router-dom'

function Section3() {
  return (
    <section>
    <div className="section section3">
      <img src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-83267.jpg" alt="" />
    </div>
    <div className="section section3">
      <h2>Hearty on the go</h2>
      <p>Grab a deliciously filling Double-Smoked Bacon, Cheddar & Egg Sandwich or Bacon & Gruyère Egg Bites.</p>
      <Link to="menu"><button>Order now</button></Link>
    </div>
  </section>
  )
}

export default Section3
