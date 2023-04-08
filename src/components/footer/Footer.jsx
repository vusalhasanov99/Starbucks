import React from 'react'
import About from './footerItems/About'
import Careers from './footerItems/Careers'
import SocialImpact from './footerItems/SocialImpact'
import ForBusinessPartners from './footerItems/ForBusinessPartners'
import OrderAndPickup from './footerItems/OrderAndPickup'
import FooterEnd from './footerEnd/FooterEnd'
import { useLocation } from 'react-router-dom'

function Footer() {
    const location = useLocation()
    return (
        <footer style={{display:location.pathname == "/findstore"?"none":"" }} >
            <div className="container">
                <div className="footerItems d-flex">
                    <About />
                    <Careers />
                    <SocialImpact />
                    <ForBusinessPartners />
                    <OrderAndPickup />
                </div>
                <hr/>
                <FooterEnd />
            </div>

        </footer>
    )
}

export default Footer
