import axios from 'axios'
import { nanoid } from 'nanoid'
import React, { useEffect, useState } from 'react'

function Input({ label, type, err, alert, show, hide, x, emailAlert, name }) {
    const [value, setValue] = useState("")
    const [status, setStatus] = useState(false)
    const [blur, setBlur] = useState(true)
    const [view, setView] = useState(false)
    const [valLength, setValLength] = useState(false)
    const changeBlur = () => {
        setStatus(true)
        setBlur(false)
    }
    const [post, setPost] = useState({
        firstname: "",
        lastname: "",
        email: "",
        password: ""
    })
    const changeValue = (e) => {
        setValue(e.target.value)
        if (value.length > 0) {
            setValLength(true)
        }
        setPost({ ...post, [e.target.name]: e.target.value })
    }
  

// const addUsers=()=>{
//     axios.post(`http://localhost:5001/users/`,{post})
//     .then(response=>console.log(response))
//     .catch(err=>console.log(err))

// }   addUsers funksiyasini create butonuna vermek lazimdir
    return (
        <div className='input'>
            <label style={{ color: value.length > 0 || blur ? "green" : "red" }} className={status || value.length > 0 ? 'inputOut' : "inputIn"} htmlFor="">{label}</label>
            <input style={{ border: value.length > 0 || blur ? "1px solid " : "1px solid red" }} name={name} value={post[name]} type={view ? "text" : type} onBlur={changeBlur} onFocus={() => setStatus(true)} onChange={changeValue} />
            <p className='show' > <span onClick={() => setView(!view)}> {view ? show : hide}</span> <span style={{ display: !blur && !value.length > 0 ? "block" : "none" }}>{x}</span> </p>

            {value.length > 0 || blur ? "" : <p style={{ paddingLeft: "10px" }}>  <span style={{ fontSize: "20px", color: "red" }}>x</span> {err}</p>}
            <p style={{ paddingLeft: "10px", fontSize: "14px" }}>{emailAlert}</p>

            {/* <p>{alert}</p> */}
        </div>
    )
}

export default Input
