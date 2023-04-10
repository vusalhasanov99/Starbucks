import React from 'react'
import './Featured.css'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { nanoid } from 'nanoid';
function Featured() {
    const { data } = useSelector((store) => store.product);
    const { category } = useParams()
    return (
        <div className='featured'>
            <h1>Gift cards</h1>
            <h2>{data.map(item=>(
                item.category.toLowerCase() == category.toLowerCase() && item.category
            ))}</h2>
            <div className="featuredCards">

                {data.map(item => (
                    console.log(item.category == "Featured" && item)
                ))}
                {data.map(item => (
                    item.category.toLowerCase() == category.toLowerCase() && item.cards.map(item => (
                        <div key={nanoid()} className="card">
                            <img src={item} alt="" />
                        </div>
                    ))
                ))}
            </div>
        </div>
    )
}

export default Featured
