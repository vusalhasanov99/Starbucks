import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { nanoid } from 'nanoid'
import axios from 'axios'
import SizeElement from './SizeElement'

function Product() {
  const { product } = useParams()
  const [data, setData] = useState([])
  useEffect(() => {
    axios
      .get(("https://raw.githubusercontent.com/vusalhasanov99/Starbucks/master/src/datas/MenuAllDatas.json"))
      .then(response => setData(response.data.products));
  }, []);
  const findProduct = data.find(item => item.name.split(" ").join("-").toLowerCase() === product)



  return (
    <>
      <div className='product'>
        <div className="productImg"> <img src={findProduct?.img} alt="" /></div>
        <h1>{findProduct?.name}</h1>

      </div>
      <div className="productSizes">
        <h1>Size options</h1>
        <div className='sizes'>
          {findProduct?.sizes
            ?.map(item => (
            <SizeElement key={nanoid()} id={nanoid()} {...item}/>
            ))}
        </div>
      </div>
    </>
  )
}

export default Product