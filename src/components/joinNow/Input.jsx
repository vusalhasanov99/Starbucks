import axios from 'axios'
import { nanoid } from 'nanoid'
import React, {useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { updateField } from '../../redux/controls/post';

function Input({ label, type, err, alert, show, hide, x, emailAlert, name }) {
    const  auth  = useSelector((store) => store.auth);
    const  post  = useSelector((store) => store.post);
const dispatch = useDispatch();

    const [value, setValue] = useState("")
    const [status, setStatus] = useState(false)
    const [blur, setBlur] = useState(true)
    const [view, setView] = useState(false)
    const changeBlur = () => {
        setStatus(true)
        setBlur(false)
    }


    const changeValue = (e) => {
        setValue(e.target.value)
        dispatch(updateField({ field: e.target.name, value: e.target.value }));
    }
  


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
