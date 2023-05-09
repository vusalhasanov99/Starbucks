import React from 'react'
import './AddedProducts.css'
import { useDispatch, useSelector } from 'react-redux';
import AddedProduct from './AddedProduct';
import { removeAllProducts } from '../../../../redux/controls/basketTotal';

function AddedProducts({ setBasketShow, setModal }) {
    const dispatch = useDispatch();
    // productlar
    const basket = JSON.parse(localStorage.getItem('basket'))
    // butun productlarin sayi
    const products = useSelector(state => state.basket.products);
    const total = products.reduce((count, product) => count + product.quantity, 0);
    const closeFunction = () => {
        setBasketShow(false)
        setModal(true)
    }
    return (
        <>
            <div className="basketAddedProductsBg" onClick={closeFunction}></div>
            <div className='basketAddedProducts'>
                <div className='x'><i onClick={closeFunction} className="fa-solid fa-xmark"></i></div>
                <div className='d-flex ac jb p5'>
                    <div className='basketTotal'>Total Products : {total}</div>
                    <div className="clearAll" onClick={() => dispatch(removeAllProducts())}> <button>Clear All</button> </div>
                </div>
                {total == 0 ? <h4 className='d-flex ac jc p5'>The basket is empty</h4> : basket?.map((item, i) => (
                    <AddedProduct {...item} i={i} />
                ))}
            </div>
        </>
    )
}

export default AddedProducts
