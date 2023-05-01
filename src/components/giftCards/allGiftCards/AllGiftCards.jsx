import React, { useState } from 'react'
import './AllGiftCards.css'
import { useSelector } from 'react-redux';
import "react-multi-carousel/lib/styles.css";
import { nanoid } from 'nanoid';
import Carousel from 'react-multi-carousel';
import GotAGiftCard from '../gotAGiftCard/GotAGiftCard';
import { Link } from 'react-router-dom';
function AllGiftCards() {
    const { data } = useSelector((store) => store.product);
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4,
            slidesToSlide: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    
    };
   console.log(Object.values(responsive).map(item=>item.items)[0])
    return (
        <div className='allGiftCards'>
            <div className="allGiftCardsSlider">
                {data.slice(0, 1).map(item =>
                    <div key={nanoid()} className='p'>
                        <div className="allGiftCardsHeader">
                            <h1>{item.category}</h1>
                            <Link to={"category/" + item.category.toLocaleLowerCase()}> <button >{item.see}</button></Link>
                        </div>
                        <Carousel responsive={responsive}>
                            {item.cards.map(item =>
                                <div key={nanoid} className="card">
                                    <img src={item} alt="" />
                                </div>)}
                        </Carousel>
                    </div>)}
                <GotAGiftCard />
                {data.slice(1).map((item,i) =>
                    <div key={nanoid()} className='p' >
                        <div className="allGiftCardsHeader">
                            <h1>{item.category}</h1>
                            {item.cards.length >4 && <Link to={"category/" + item.category.toLocaleLowerCase()}> <button >{item.see}</button></Link>}
                        </div>
                        <Carousel responsive={responsive}>
                            {item.cards.map(item =>
                                <div key={nanoid()} className="card">
                                    <img src={item} alt="" />
                                </div>)}
                        </Carousel>

                    </div>)}


            </div>

        </div>
    )
}

export default AllGiftCards
