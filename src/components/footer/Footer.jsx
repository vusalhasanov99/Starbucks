import React from 'react'
import './Footer.css'
import FooterEnd from './footerEnd/FooterEnd'
import { Link, useLocation } from 'react-router-dom'
import ResponsiveFooter from './responsiveFooter/ResponsiveFooter'

function Footer() {
    const datas = [
        {
            title: "About Us",
            li: ["Our Company", "Our Coffe", "Stories and News", "Starbucks Archive", "Investor RElations", "Costumer Service"]
        },
        {
            title: "Careers",
            li: ["Culture and Values", "Inclusion,Diversity,and Equity", "College Achievement Plan", "Aumni Community", "U.S.Careers", "International Careers"]
        },
        {
            title: "Social Impact",
            li: ["People", "Planet", "Environmental and Social Impact Reporting"]
        },
        {
            title: "For Business Partners",
            li: ["Landlord Support Center", "Suppliers", "Corporate Gift Card Sales", "Office and Foodservice Coffee"]
        },
        {
            title: "Order And Pickup",
            li: ["Order on the App", "Order on the Web", "Delivery", "Order and Pickup Options", "Explore and Find Coffe for Home"]
        }
    ]

    const location = useLocation()
    return (
        <footer style={{ display: location.pathname == "/findstore" ? "none" : "" }} >
               <div className="responsiveFooter">
                <ResponsiveFooter datas={datas} />
                </div>
            <div className="container">
                <div className="footerItems d-flex ">
                    {datas.map(item => (
                        <div className='footerItem'>
                            <h2>{item.title}</h2>
                            <ul>
                                {item.li.map(item => (
                                    <li><Link>{item}</Link></li>
                                ))}
                            </ul>
                        </div>

                    ))}
                </div>
                <hr />
                <FooterEnd />
            </div>

        </footer>
    )
}

export default Footer
