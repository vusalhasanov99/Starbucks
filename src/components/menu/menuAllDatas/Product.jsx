import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { nanoid } from 'nanoid'
import axios from 'axios'
import SizeElement from './SizeElement'
import Customizations from './customizations/Customizations'
import Basket from '../basket/Basket'
import Modal from '../modal/Modal'
import { useDispatch, useSelector } from 'react-redux'
import { updateTotal } from '../../../redux/controls/basketTotal'

function Product() {
  const { product } = useParams()
  const [data, setData] = useState([])
  const [selected, setSelected] = useState(0)
  const [modal, setModal] = useState(true)
  const [info, setInfo] = useState(false)
  const [productAddedShow, setProductAddedShow] = useState(false)
  //Baskete product elave etmek
  const dispatch = useDispatch();
  const total = useSelector(state => state.totalReducer.total);
  console.log(total);
  const addProduct = () => {
    dispatch(updateTotal(total + 1));
    setProductAddedShow(true)
    setTimeout(() => {
      setProductAddedShow(false)
    }, 4000)
  };

// product secilmesi border alave edilmesi
  const selectProduct = (index) => {
    setSelected(index)
  }
  useEffect(() => {
    axios
      .get(("https://raw.githubusercontent.com/vusalhasanov99/Starbucks/master/src/datas/MenuAllDatas.json"))
      .then(response => setData(response.data.products));
  }, []);
  const findProduct = data.find(item => item.name.split(" ").join("-").toLowerCase() === product)


  return (
    <>
      <div className="productLink">
        <div className='container80'><Link to="/menu">Menu</Link> / <Link to={`/menu/${findProduct?.category.toLowerCase()}/${findProduct?.subcategory.split(' ').join('-').toLowerCase()}`}>{findProduct?.subcategory}</Link> / <span>{findProduct?.name}</span> </div>
      </div>
      <div className='product'>
        <div className="productImg"> <img src={findProduct?.img} alt="" /></div>
        <div className='productDetail'>
          <h1>{findProduct?.name}</h1>
          <p>{findProduct?.sizes[selected].calories}<svg onClick={() => setInfo(!info)} aria-hidden="true" class="valign-middle absoluteCenter" focusable="false" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" style={{ width: "16px", height: "16px", overflow: "visible", fill: "currentcolor", margin: "5px 10px", cursor: "pointer" }}><path d="M12 1.35C6.118 1.35 1.35 6.118 1.35 12c0 5.882 4.768 10.65 10.65 10.65 5.882 0 10.65-4.768 10.65-10.65 0-5.882-4.768-10.65-10.65-10.65zm0 1.5c5.053 0 9.15 4.097 9.15 9.15s-4.097 9.15-9.15 9.15S2.85 17.053 2.85 12 6.947 2.85 12 2.85zm-.75 7.928v6.486c0 .414.336.75.75.75s.75-.336.75-.75v-6.486c0-.414-.336-.75-.75-.75s-.75.336-.75.75zm1.5-3.056v-.61c0-.415-.336-.75-.75-.75s-.75.335-.75.75v.61c0 .414.336.75.75.75s.75-.336.75-.75z"></path><circle class="sb-icon-hover" cx="50%" cy="50%" fill="transparent" r="75%"></circle></svg></p>
          <div className="info" style={{ display: info ? "flex" : "none" }}>
            <svg aria-hidden="true" class="valign-middle color-gold" focusable="false" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" style={{ width: "24px", height: "24px", overflow: "visible", fill: "currentcolor", color: "#cba258", marginBottom: "20px" }}><path d="M7.47714 13.9773C6.63694 11.5535 6.51852 10.4481 5.91446 9.75016C5.33202 9.03409 4.26395 8.72551 2.0229 7.47715C4.44667 6.63695 5.5521 6.51852 6.25004 5.91451C6.96612 5.33202 7.2747 4.26395 8.52301 2.02293C9.3632 4.44667 9.48167 5.5521 10.0857 6.25009C10.6681 6.96612 11.7362 7.2747 13.9772 8.52301C11.5535 9.36326 10.448 9.48168 9.7501 10.0857C9.03407 10.6682 8.72544 11.7363 7.47714 13.9773Z"></path><path d="M17.9945 17.1446C16.9153 15.5518 16.6149 14.774 16.0419 14.3856C15.4809 13.9799 14.6472 13.9637 12.7814 13.4944C14.3742 12.4152 15.152 12.1148 15.5404 11.5418C15.9461 10.9808 15.9623 10.1471 16.4316 8.28133C17.5108 9.87409 17.8112 10.6519 18.3843 11.0403C18.9452 11.446 19.7789 11.4622 21.6447 11.9315C20.0519 13.0107 19.2741 13.3111 18.8857 13.8842C18.48 14.4451 18.4638 15.2788 17.9945 17.1446Z"></path><path d="M10.3953 20.9983C9.91234 19.81 9.82428 19.2612 9.5044 18.9285C9.19484 18.5862 8.65346 18.4601 7.50181 17.8954C8.69005 17.4124 9.2389 17.3244 9.57159 17.0045C9.91389 16.6949 10.04 16.1536 10.6047 15.0019C11.0876 16.1901 11.1757 16.739 11.4956 17.0717C11.8051 17.414 12.3465 17.5401 13.4982 18.1048C12.3099 18.5877 11.7611 18.6758 11.4284 18.9957C11.0861 19.3052 10.9599 19.8466 10.3953 20.9983Z"></path></svg>
            <p> Information is based on standard recipes and does not reflect customizations</p>
            <svg onClick={() => setInfo(false)} aria-hidden="true" class="valign-middle absoluteCenter" focusable="false" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" style={{ width: "24px", height: "24px", overflow: "visible", fill: "currentcolor", cursor: "pointer", marginLeft: "10px" }}><path d="M13.06 12l5.72-5.72c.292-.292.292-.767 0-1.06-.294-.293-.768-.293-1.06 0L12 10.94 6.28 5.22c-.293-.293-.767-.293-1.06 0-.293.293-.293.768 0 1.06L10.94 12l-5.72 5.72c-.293.292-.293.767 0 1.06.146.146.338.22.53.22s.384-.074.53-.22L12 13.06l5.72 5.72c.145.146.337.22.53.22.19 0 .383-.074.53-.22.292-.293.292-.768 0-1.06L13.06 12z"></path><circle class="sb-icon-hover" cx="50%" cy="50%" fill="transparent" r="75%"></circle></svg>
            <div className="info1"></div>

          </div>
        </div>

      </div>
      <div className="options container80">
        <div className="productSizes">
          <h1>Size options</h1>
          <div className='sizes'>
            {findProduct?.sizes
              ?.map((item, i) => (
                <SizeElement key={nanoid()} id={nanoid()} {...item} selectProduct={selectProduct} i={i} selected={selected} setSelected={setSelected} />
              ))}
          </div>
        </div>
        <Customizations />
      </div>
      <div className="basketOrder">
        <div className="addOrder">
          <button onClick={addProduct}>Add To Order</button>
        </div>
        <div className="addedProduct" style={{ display: productAddedShow ? "flex" : "none" }}>
          <p> {findProduct?.name} added</p>  <svg onClick={()=>setProductAddedShow(false)} aria-hidden="true" class="valign-middle absoluteCenter" focusable="false" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" style={{ width: "24px", height: "24px", overflow: "visible", fill: "currentcolor" ,cursor:"pointer"}}><path d="M13.06 12l5.72-5.72c.292-.292.292-.767 0-1.06-.294-.293-.768-.293-1.06 0L12 10.94 6.28 5.22c-.293-.293-.767-.293-1.06 0-.293.293-.293.768 0 1.06L10.94 12l-5.72 5.72c-.293.292-.293.767 0 1.06.146.146.338.22.53.22s.384-.074.53-.22L12 13.06l5.72 5.72c.145.146.337.22.53.22.19 0 .383-.074.53-.22.292-.293.292-.768 0-1.06L13.06 12z"></path><circle class="sb-icon-hover" cx="50%" cy="50%" fill="transparent" r="75%"></circle></svg>
        </div>
      </div>
      {modal ? <Basket modal={modal} setModal={setModal} /> : <Modal setModal={setModal} />}

    </>
  )
}

export default Product