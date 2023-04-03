import React from 'react'
import './Feautured.css'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Feautured() {
    const { products } = useSelector((store) => store.product);
    return (
        <div className='feautured'>
            <strong>Cue spring mood</strong>
            <div className="d-flex">
                {products.map(product => <div className='feauturedProduct' style={{ backgroundColor: product.bgColor }}>
                    <div className="productImg">
                        <img src={product.img} alt="" />
                    </div>
                    <div className="productContent">
                        <span>{product.title}</span>
                        <p>{product.text}</p>
                        <Link><button>Order now</button></Link>
                    </div>
                </div>
                )}
            </div>
            <p className='text'>*Impossible is a trademark of Impossible Foods, Inc. Used under license.</p>
        </div>
    )
}

export default Feautured
