import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { updateField } from '../../redux/controls/user';

function Form({ label, type, err, show, hide, x, name,forv }) {
    const user = useSelector((store) => store.user);
    console.log(user);
    const dispatch = useDispatch();
    const [value, setValue] = useState("")
    const [status, setStatus] = useState(false)
    const [blur, setBlur] = useState(true)
    const [view, setView] = useState(false)
    const [valLength, setValLength] = useState(false)
    const changeBlur = () => {
        setStatus(true)
        setBlur(false)
    }
 
    const changeValue = (e) => {
        setValue(e.target.value)
        if (value.length > 0) {
            setValLength(true)
        }
        dispatch(updateField({ field: e.target.name, value: e.target.value }));
    }

    return (
        <div className="inp">
            <label style={{ color: value.length > 0 || blur ? "green" : "red" }} className={status || value.length > 0 ? 'inputOut' : "inputIn" || value.length > 0} htmlFor="">{label}</label>
            <input style={{ border: value.length > 0 || blur ? "1px solid " : "1px solid red" }} ref={forv} value={value} name={name} type={view ? "text" : type} onBlur={changeBlur} onFocus={() => setStatus(true)} onChange={changeValue} aria-invalid />
            <p className='show' > <span onClick={() => setView(!view)}> {view ? show : hide}</span> <span style={{ display: !blur && !value.length > 0 ? "block" : "none" }}>{x}</span> </p>
            {value.length > 0 || blur ? "" : <p style={{ paddingLeft: "10px" }}>  <span style={{ fontSize: "20px", color: "red" }}>x</span> {err}</p>}
        </div>
    )
}

export default Form
