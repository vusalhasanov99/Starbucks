import React from 'react'
import './Modal.css'
import { Link } from 'react-router-dom'
function Modal({setModal}) {
  return (
    <div className='modal'>
      <div className="modalContent">
        <p>Please select a store before continuing to the cart.</p>
        <div className="modalContentBtns">
            <button className='cancel' onClick={()=>setModal(true)}>Cancel</button>
          <Link to="/findstore">  <button className='selectStore'>Select Store</button></Link>
        </div>
      </div>
    </div>
  )
}

export default Modal
