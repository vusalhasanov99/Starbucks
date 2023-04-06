import React from 'react'
import './RewardsKeep.css'
function RewardsKeep() {
    return (
        <div className='rewardsKeep'>
            <div className="rewardsKeepContent">
                <div className="img">
                    <img src="https://www.starbucks.com/app-assets/7997fb008f368630d3ca3c1194fd8404.svg" alt="" />
                </div>
                <div className="rewardsKeepContentItem">
                    <h1>Keep the Rewards Coming</h1>
                    <p>The Rewards don't stop at your morning coffee. Join Starbucks® Rewards and unlock perks from our partners, all while earning more Stars.</p>
                    <img src="https://www.starbucks.com/weblx/images/rewards/loyalty-partnerships/delta-skymiles.png" alt="Delta Skymiles" />
                    <p><a href="#"> Link your Delta SkyMiles®</a> and Starbucks® Rewards accounts to earn 1 mile per $1* spent at Starbucks and double Stars on Delta travel days.</p>
                    <button>Join Starbucks® Rewards</button>
                </div>
                <div className="img">
                    <img src="https://www.starbucks.com/app-assets/b7e1b20df72e802cb1cf0e97e8fe21d0.svg" alt="" />
                </div>
            </div>
        </div>
    )
}

export default RewardsKeep
