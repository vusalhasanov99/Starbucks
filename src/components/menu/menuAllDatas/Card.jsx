import React from 'react'
import { Link } from 'react-router-dom'

function Card({ name, img, category, subcategory }) {
    const path = category + "/" + subcategory.split(" ").join("-") + "/" + name.split(" ").join("-")
    return (
        <div className='item'>
            <Link to={`/menu/all/${path.toLowerCase()}`}>
               <div className="img">
                 <img src={img} alt={name} /></div>
                <h4 className='text-lg'>{name}</h4>
            </Link>
        </div>
    )
}

export default Card
