import React, { useState } from 'react'
import './Modal.css'
import AddedProducts from '../basket/addedProducts/AddedProducts'
function Modal({setModal}) {
  const [basketShow,setBasketShow] =useState(false)
  return (
    <>
    <div className='modal' style={{display:basketShow&&"none"}}>
      <div className="modalContent">
        <p>Please select a store before continuing to the cart.</p>
        <div className="modalContentBtns">
            <button className='cancel' onClick={()=>setModal(true)}>Cancel</button>
         <button className='selectStore' onClick={()=>setBasketShow(true)}>Open Store</button>
        </div>
      </div>
    </div>
    {basketShow&& <AddedProducts setBasketShow={setBasketShow} setModal={setModal}/>}
    </>
  )
}

export default Modal
