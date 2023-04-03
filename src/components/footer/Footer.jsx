import React from 'react'
import About from './footerItems/About'
import Careers from './footerItems/Careers'
import SocialImpact from './footerItems/SocialImpact'
import ForBusinessPartners from './footerItems/ForBusinessPartners'
import OrderAndPickup from './footerItems/OrderAndPickup'
import FooterEnd from './footerEnd/FooterEnd'

function Footer() {
    return (
        <footer>
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
