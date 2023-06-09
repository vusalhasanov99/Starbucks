import React from 'react'
import RewardsCashItemApp from './RewardsCashItemApp'
import { nanoid } from 'nanoid'

function RewardsCashItem({usd,description,data}) {
  return (
    <div className='rewardsCashItem'>
      <div className="rewardsCashItemUsd">
        <h1>{usd}</h1>
        <p>{description}</p>
      </div>
      <div className='d-flex'>
        
      {data.map(item=>(
            <RewardsCashItemApp key={nanoid()} {...item}/>
        ))}

      </div>
    </div>
  )
}

export default RewardsCashItem
