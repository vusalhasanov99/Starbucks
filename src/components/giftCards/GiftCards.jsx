import React from 'react'
import Featured from './featured/Featured'
import GiftSupport from './giftSupport/GiftSupport'
import GiftBulk from './giftBulk/GiftBulk'

function GiftCards() {
    return (
        <div className='giftCards'>
            <Featured/>
            <GiftBulk/>
            <GiftSupport/>
        </div>
    )
}

export default GiftCards
