import React from 'react'
import './Section.css'
import { Link } from 'react-router-dom'

function Section1() {
  return (
    <section>
      <div className="section">
        <img src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-83413.jpg" alt="" />
      </div>
      <div className="section">
        <h2>Nitro your way</h2>
        <p>Try the new Cinnamon Caramel Cream Nitro Cold Brew or go for the Vanilla Sweet Cream Nitro Cold Brew.</p>
        <Link to="/menu"><button>Order now</button></Link>
      </div>
    </section>
  )
}

export default Section1
