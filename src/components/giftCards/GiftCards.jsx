import React from 'react'
import GiftSupport from './giftSupport/GiftSupport'
import GiftBulk from './giftBulk/GiftBulk'
import AllGiftCards from './allGiftCards/AllGiftCards'


function GiftCards() {

    return (
        <div className='giftCards'>
                <AllGiftCards />
                <GiftBulk />
                <GiftSupport />
        </div>
    )
}

export default GiftCards
