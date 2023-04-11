import React from 'react'
import './JoinNow.css'
import Form from './Form'
function JoinNow() {
  return (
    <div className='joinNow'>
   <div className='create'>
   <h1>Create an account</h1>
      <h2 className='strbcks'>STARBUCKS<sup style={{fontSize:"10px"}}>® </sup>REWARDS</h2>
      <p>Join Starbucks Rewards to earn Stars for free food and drinks, any way you pay. Get access to mobile ordering, a birthday Reward, and <a href="#">more</a>.</p>
   </div>
     
      <Form/>
      
    </div>
  )
}

export default JoinNow
