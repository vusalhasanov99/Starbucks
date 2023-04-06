import React from 'react'
import './RewardsGetting.css'
import { nanoid } from 'nanoid'
function RewardsGetting() {

    const data = [
        {
            id: 1,
            img: "https://www.starbucks.com/weblx/images/rewards/getting-started/getting-started-1@2x.jpg",
            title: "Create an account",
            description: "To get started, <a href='#' >join now</a>. You can also <a href='#'>join in the app</a> to get access to the full range of Starbucks® Rewards benefits."
        },
        {
            id: 2,
            img: "https://www.starbucks.com/weblx/images/rewards/getting-started/getting-started-2@2x.jpg",
            title: "Order and pay how you’d like",
            description: "Use cash, credit/debit card or save some time and pay right through the app. You’ll collect Stars all ways <a href='#'>Learn how</a>"
        },
        {
            id: 3,
            img: "https://www.starbucks.com/weblx/images/rewards/getting-started/getting-started-3@2x.jpg",
            title: "Earn Stars, get Rewards",
            description: "As you earn Stars, you can redeem them for Rewards—like free food, drinks, and more. Start redeeming with as little as 25 Stars!"
        }]

    return (
        <div className="rewardsGetting">
            <h1>Getting started is easy</h1>
            <p>Earn Stars and get rewarded in a few easy steps.</p>
            <div className='rewardsGettingItems'>
                {data.map(item => (
                    <RewardsGettingItem key={nanoid()} {...item} />
                ))}
            </div>
        </div>
    )
}

export default RewardsGetting


function RewardsGettingItem({ img, title, description }) {
    return (
        <div className="rewardsGettingItem">
            <div className="rewardsGettingItemImg">
                <img src={img} alt="" />
            </div>
            <h2>{title}</h2>
            <p dangerouslySetInnerHTML={{ __html: description }} />
        </div>
    )
}