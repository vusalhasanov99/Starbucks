import React from 'react'
import './RewardsCash.css'
import RewardsCashItems from './RewardsCashItems'
function RewardsCash() {
  return (
    <div className='rewardsCash '>
      <h1>Cash or card, you earn Stars</h1>
      <p>No matter how you pay, you can earn Stars with your morning coffee. Those Stars add up to (really delicious) Rewards.</p>
        <RewardsCashItems/>
    </div>
  )
}

export default RewardsCash
