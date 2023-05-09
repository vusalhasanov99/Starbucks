import React from 'react'
import { decreaseQuantity, increaseQuantity, removeProduct } from '../../../../redux/controls/basketTotal'
import { useDispatch } from 'react-redux';

function AddedProduct({name,img,quantity,id}) {
    const dispatch = useDispatch();

    return (
        <div className='basketAddedProduct'>
            <div className="img"><img src={img} alt="" /></div>
            <div className="name">{name}</div>
            <div className="quantity"><button onClick={()=>  dispatch(decreaseQuantity({id}))} >-</button> <button>{quantity}</button> <button onClick={()=>dispatch(increaseQuantity({id}))}>+</button><button style={{color:"#fff"}} onClick={()=>dispatch(removeProduct({ id }))}>X</button> </div>
        </div>
    )
}

export default AddedProduct
