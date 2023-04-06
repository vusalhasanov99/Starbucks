import React from 'react'
import { useSelector } from 'react-redux';
import "react-multi-carousel/lib/styles.css";
import Carousel from 'react-multi-carousel';
import { nanoid } from 'nanoid';

function FeaturedSlider() {
  const { data } = useSelector((store) => store.product);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
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
  return (
    <div className="featuredSlider">

      {data.map(item =>
        <div key={nanoid()} >
          <div className="featuredHeader">
          <h1>{item.category}</h1>
          <button>See all</button>
          </div>
          <Carousel responsive={responsive}>
          
              {item.cards.map(item => <img src={item} alt="fhdasjdsgdhsysjk" />)}
           
          </Carousel>

        </div>)}


    </div>
  )
}

export default FeaturedSlider
