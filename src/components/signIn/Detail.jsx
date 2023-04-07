import React from 'react'

function Detail({ showModal, setShowModal }) {
    return (
        <div className='detail' style={{ display: showModal ? "block" : "none" }}>
            <p>Checking this box will reduce the number of times you’re asked to sign in. To keep your account secure, use this option only on your personal devices.
            </p>
            <div className="gotBtn"> <button onClick={() => setShowModal(false)}>Got it</button></div>
            <div></div>
        </div>
    )
}

export default Detail
