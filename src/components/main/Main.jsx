import React from 'react'
import './Main.css'
import { Link} from 'react-router-dom'


function Main() {
  const datas = [
    {
      img: "https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-83413.jpg",
      title: "Nitro your way",
      text: "Try the new Cinnamon Caramel Cream Nitro Cold Brew or go for the Vanilla Sweet Cream Nitro Cold Brew."
    },
    {
      img: "https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-83418.png",
      title: "Carefree and cool",
      text: "Our Pink Drink Starbucks Refreshers® beverage with real strawberry pieces and coconutmilk is a spring-inspired delight."
    },
    {
      img: "https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-83267.jpg",
      title: "Hearty on the go",
      text: "Grab a deliciously filling Double-Smoked Bacon, Cheddar & Egg Sandwich or Bacon & Gruyère Egg Bites."
    }
  ]
  return (
    <>
    {datas.map((item,i) => (
      <section style={{flexDirection:i==1&&"row-reverse"}}>
        <div className="section">
          <img src={item.img} alt="" />
        </div>
        <div className="section">
          <h2>{item.title}</h2>
          <p>{item.text}</p>
          <Link to="/menu"><button>Order now</button></Link>
        </div>
      </section>
    ))}
  </>
  )
}

export default Main
