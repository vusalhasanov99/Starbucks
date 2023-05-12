import React from 'react'
import { decreaseQuantity, increaseQuantity, removeProduct } from '../../../../redux/controls/basketTotal'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

function AddedProduct({name,img,quantity,id,findProduct}) {
    const dispatch = useDispatch();
    return (
        <div className='basketAddedProduct'>
            <div className="img"><Link to={`/menu/${findProduct?.category.toLowerCase()}/${findProduct?.subcategory.split(" ").join("-").toLowerCase()}/${name.split(" ").join("-").toLowerCase()}`}><img src={img} alt="" /></Link></div>
            <div className="name">{name}</div>
            <div className="quantity"><button onClick={()=>  dispatch(decreaseQuantity({id}))} >-</button> <button>{quantity}</button> <button onClick={()=>dispatch(increaseQuantity({id}))}>+</button><button style={{color:"#fff"}} onClick={()=>dispatch(removeProduct({ id }))}>X</button> </div>
        </div>
    )
}

export default AddedProduct
