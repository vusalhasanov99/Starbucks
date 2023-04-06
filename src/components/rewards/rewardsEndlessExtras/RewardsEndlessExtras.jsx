import React from 'react'
import './RewardsEndlessExtras.css'
import { nanoid } from 'nanoid'

function RewardsEndlessExtras() {

    const data = [
        {
            img: "https://www.starbucks.com/weblx/images/rewards/benefits/1-fun-freebies.jpg",
            title: "Fun freebies",
            description: "Not only can you earn free coffee, look forward to a birthday treat plus coffee and tea refills."
        },
        {
            img: "https://www.starbucks.com/weblx/images/rewards/benefits/2-order-and-pay-ahead.jpg",
            title: "Order & pay ahead",
            description: "Enjoy the convenience of in-store, curbside or drive-thru pickup at select stores"
        },
        {
            img: "https://www.starbucks.com/weblx/images/rewards/benefits/3-get-to-free-faster.jpg",
            title: "Get to free faster",
            description: "Earn Stars even quicker with Bonus Star challenges, Double Star Days and exciting games."
        },
    ]

    return (
        <div className='rewardsEndlessExtras'>
            <h2>Endless Extras</h2>
            <p>Joining Starbucks® Rewards means unlocking access to exclusive benefits. Say hello to easy ordering, tasty Rewards and—yes, free coffee.</p>
            <div className='rewardsEndlessExtrasItems'>
                {data.map(item => <RewardsEndlessExtrasItem key={nanoid()} {...item} />)}
            </div>
        </div>
    )
}

export default RewardsEndlessExtras
function RewardsEndlessExtrasItem({ img, title, description }) {
    return (
        <div className="rewardsEndlessExtrasItem">
            <div className="rewardsEndlessExtrasItemImg">
                <img src={img} alt="" />
            </div>
            <div className="rewardsEndlessExtrasItemText">
                <h3>{title}</h3>
                <p>{description}</p>
                <a href="#">Learn more</a>
            </div>
        </div>
    )

}
