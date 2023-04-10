import React from 'react'
import Drinks from './Oleato'
import Food from './Food'
import AtHomeCoffee from './AtHomeCoffee'
import Merchandise from './Merchandise'
import GiftCards from './GiftCards'

function MenuAllDatas() {
    return (
        <div className='menuAllDatas'>
            <Drinks />
            <Food />
            <AtHomeCoffee />
            <Merchandise />
            <GiftCards />
        </div>
    )
}

export default MenuAllDatas
