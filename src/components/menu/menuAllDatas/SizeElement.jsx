import React from 'react'

function SizeElement({ size, capacity, selectProduct, i,selected }) {

    return (
        <div className='sizeElement'   onClick={()=>selectProduct(i)} >
            <div className="sizeImg" >
                <img style={{ width: +capacity.slice(0, 2) + "px", height: +capacity.slice(0, 2) * 2 + "px" }} src="https://www.starbucks.com/app-assets/c6d5ff0dfccfc8966d3ad8ab2331921f.svg" alt="" />
            </div>
            {selected ==i&& <div className="borderSize"></div>}
            <h4>{size}</h4>
            <div>{capacity}</div>
        </div>
    )
}

export default SizeElement
