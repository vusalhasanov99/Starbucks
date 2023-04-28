import React from 'react'
import './ErrorPage.css'
import coffe from '../../imgs/coffe.png'
import { Helmet } from "react-helmet";
function ErrorPage() {
    return (
        <div className='errorPage'>
            <h1>We can't find the page you're looking for.</h1>
            <p>Don't worry, it's just a little spilled Chai Tea Latte. Let us help you clean that up and find your way! Mop up the spill to reveal something underneath.</p>
            <div className="d-flex ac">
                <div className="img">
                    <img src={coffe} alt="" />
                </div>
                <div className="btns">
                    <h2>Would you like to:</h2>
                    <button>Place an order</button>
                    <button>Check a gift card</button>
                    <button>Return to home page</button>
                </div>
            </div>
            <Helmet>
                <title>Error page</title>
            </Helmet>
        </div>
    )
}

export default ErrorPage
