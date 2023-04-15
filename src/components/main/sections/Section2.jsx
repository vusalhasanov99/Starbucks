import React from 'react'
import './Section.css'
import { Link } from 'react-router-dom'

function Section2() {
  return (
    <section>
      <div className="section section2">
        <h2>Carefree and cool</h2>
        <p>Our Pink Drink Starbucks Refreshers® beverage with real strawberry pieces and coconutmilk is a spring-inspired delight.</p>
        <Link to="/menu"><button>Order now</button></Link>
      </div>
      <div className="section section2">
        <img src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-83418.png" alt="" />
      </div>
    </section>
  )
}

export default Section2
