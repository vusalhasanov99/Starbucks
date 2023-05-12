import React, { useState } from 'react';
import './FormEnd.css';
import { useSelector } from 'react-redux';
import { getAuth, reload } from 'firebase/auth';
import { register } from '../../../auth/firebase';
import RegisterAlert from '../registerAlert/RegisterAlert';


function FormEnd() {
    const auth = getAuth();
    const post = useSelector((store) => store.post);
    const [registerAlert, setRegisterAlert] = useState(false) //Register succesfull

    const svg = <svg aria-hidden="true" className="valign-middle " focusable="false" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" style={{ width: "24px", height: "24px", overflow: "visible", fill: "currentcolor" }}><path d="M14.75 18H7.875C6.84 18 6 17.16 6 16.125V9.25c0-1.036.84-1.875 1.875-1.875h5.11c.276 0 .5.224.5.5s-.224.5-.5.5h-5.11c-.483 0-.875.392-.875.875v6.875c0 .483.392.875.875.875h6.875c.483 0 .875-.392.875-.875V11c0-.276.224-.5.5-.5s.5.224.5.5v5.125c0 1.035-.84 1.875-1.875 1.875zM14 6.5c0-.276.224-.5.5-.5h3c.276 0 .5.224.5.5v3c0 .276-.224.5-.5.5s-.5-.224-.5-.5V7.72l-4.66 4.74c-.19.196-.507.2-.704.005-.197-.193-.2-.51-.006-.707L16.307 7H14.5c-.276 0-.5-.224-.5-.5z"></path></svg>

    const handleSubmit = (e) => {
        e.preventDefault();
        register(post.email, post.password)
        setRegisterAlert(true)
      setTimeout(()=>{
        setRegisterAlert(false)
        window.location.reload();
      },3000)
    };
    return (
        <div className='formEnd'>
            <button>Already have a Starbucks gift card? <svg aria-hidden="true" className="valign-middle dropdown___30Gkf" focusable="false" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" style={{ width: "20px", height: "20px", overflow: "visible", fill: "currentcolor" }}><path d="M11.96 15.5c-.206 0-.402-.084-.546-.232l-5.188-5.33c-.3-.31-.3-.81 0-1.12.3-.31.79-.31 1.093 0l4.64 4.767 4.723-4.853c.3-.31.79-.31 1.09 0 .303.31.303.812.002 1.122l-5.27 5.414c-.145.148-.34.232-.546.232"></path></svg></button>
            <h2>COLLECT MORE STARS & EARN REWARDS</h2>
            <p>Email is a great way to know about offers and what’s new from Starbucks.</p>
            <label htmlFor="check1">
                <div>
                    <input id='check1' type="checkbox" />
                </div>
                <div className='checkDiv'>
                    <p>Yes, I’d like email from Starbucks</p>
                    <p>Know about initiatives, announcements and product offers.</p>
                </div>
            </label>
            <h2>TERMS OF USE</h2>
            {registerAlert&&<RegisterAlert/>}
            <label htmlFor="check2">
                <div>  <input id='check2' type="checkbox" /></div>
                <div className='checkDiv'>
                    <p>I agree to the
                        <a href="#"> <span>  Starbucks® Rewards Terms</span>
                            {svg}</a> <span> and the</span>
                        <a href="#"><span> Starbucks Card Terms</span>
                            {svg} </a> <span>and have read the</span>
                        <a href="#"><span>Starbucks Privacy Statement</span>
                            {svg}</a></p>
                </div>
            </label>
            <div className="createAccount">
                <button type='submit' onClick={handleSubmit}>Create account</button>
            </div>
        </div>
    )
}

export default FormEnd
