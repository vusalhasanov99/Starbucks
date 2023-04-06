import React, { useState } from 'react'
import './RewardsGetFavorites.css'
import { nanoid } from 'nanoid'

function RewardsGetFavorites() {
    const data = [
        {
            id: 1,
            btn: 25,
            img: 'https://www.starbucks.com/weblx/images/rewards/reward-tiers/025.png',
            title: "Customize your drink",
            description: "Make your drink just right with an extra espresso shot, nondairy milk or a dash of your favorite syrup."
        },
        {
            id: 2,
            btn: 100,
            img: "https://www.starbucks.com/weblx/images/rewards/reward-tiers/100.png",
            title: "Brewed hot or iced coffee or tea, bakery item, packaged snack and more",
            description: "Treat yourself to an iced coffee, buttery croissant, bag of chips and more."
        },
        {
            id: 3,
            btn: 250,
            img: "https://www.starbucks.com/weblx/images/rewards/reward-tiers/200.png",
            title: "Handcrafted drink (Cold Brew, lattes and more) or hot breakfast",
            description: "Turn good mornings great with a delicious handcrafted drink of your choice, breakfast sandwich or oatmeal on us."
        },
        {
            id: 4,
            btn: 300,
            img: "https://www.starbucks.com/weblx/images/rewards/reward-tiers/300.png",
            title: "Sandwich, protein box or at-home coffee",
            description: "Enjoy a PM pick-me-up with a lunch sandwich, protein box or a bag of coffee—including Starbucks VIA Instant®"
        },
        {
            id: 5,
            btn: 400,
            img: "https://www.starbucks.com/weblx/images/rewards/reward-tiers/400.png",
            title: "Select Starbucks® merchandise",
            description: "Take home a signature cup, drink tumbler or your choice of coffee merch up to $20."
        },
    ]


    const [content, setContent] = useState(data[0])

    return (
        <>
            <div className='rewardsGetFavorites'>
                <h2>Get your favorites for free</h2>
                <div className="btns">
                    {data
                        .map(item => <RewardsGetFavoritesBtn key={nanoid()}
                            content={content}
                            data={data}
                            setContent={setContent}
                            {...item} />)}
                </div>
            </div>
            <RewardsGetFavoritesItem content={content} />

        </>
    )
}

export default RewardsGetFavorites

function RewardsGetFavoritesItem({ content }) {
    return (
        <div className="rewardsGetFavoritesItems ">
            <div className='rewardsGetFavoritesItem d-flex'>
                <div className="rewardsGetFavoritesItemImg">
                    <img src={content.img} alt="" />
                </div>
                <div className="rewardsGetFavoritesItemText">
                    <h2>{content.title}</h2>
                    <p>{content.description}</p>
                </div>
            </div>

        </div>
    )
}
function RewardsGetFavoritesBtn({ id, btn, data, content, setContent }) {
    const getContent = (arg) => {
        setContent(data.find(item => item.id === arg))
    }
    return (
        <button
            className={id === content.id ? 'borderGreen' : ""}
            onClick={() => getContent(id)}>
            {btn}
            <span aria-hidden="true" className="color-gold text-xs">★</span>
        </button>
    )
}