import React from 'react'
import './Featured.css'
import { useSelector } from 'react-redux';
function Featured() {
    const { data } = useSelector((store) => store.product);
    console.log(data[0]);
    return (
        <div className='featured'>
            {data[0].cards.map(item => (
                <div className="card">
                    <img src={item} alt="" />
                </div>
            ))}

        </div>
    )
}

export default Featured
