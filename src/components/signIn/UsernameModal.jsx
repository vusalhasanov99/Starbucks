import React from 'react'

function UsernameModal({showUsernameModal,setShowUsernameModal}) {
  return (
    <div className='usernameModal' style={{ display: showUsernameModal ? "block" : "none" }}>
    <p>You can now use your email instead of a username.
    </p>
    <div className="gotBtn"> <button onClick={() => setShowUsernameModal(false)}>Got it</button></div>
    <div></div>
</div>
  )
}

export default UsernameModal
