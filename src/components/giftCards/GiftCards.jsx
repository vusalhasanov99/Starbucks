import React, { useState } from 'react'
import GiftSupport from './giftSupport/GiftSupport'
import GiftBulk from './giftBulk/GiftBulk'
import AllGiftCards from './allGiftCards/AllGiftCards'
import Featured from './featured/Featured'

function GiftCards() {
    const [page, setPage] = useState(true)
    const changePage = () => {
        setPage(false)
    }
    return (
        <div className='giftCards'>
            {page ? <div>
                <div className='giftCards'>
                    <AllGiftCards changePage={changePage} />
                    <GiftBulk />
                    <GiftSupport />
                </div></div> :
                 <Featured/>}

        </div>
    )
}

export default GiftCards
