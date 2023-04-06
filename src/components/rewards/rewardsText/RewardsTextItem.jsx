import React from 'react'

function RewardsTextItem({ title1, title2, p1, p2, p3, p4, p5 }) {
  return (
    <div className='rewardsTextItem'>
      <div>
        <h1>{title1}</h1>
        <p  dangerouslySetInnerHTML={{ __html: p1 }}/>
        <p  dangerouslySetInnerHTML={{ __html: p2 }}/>
        <p  dangerouslySetInnerHTML={{ __html: p3 }}/>
        <p  dangerouslySetInnerHTML={{ __html: p4 }}/>
      </div>
      <h1>{title2}</h1>
      <p>{p5}</p>
    </div>
  )
}

export default RewardsTextItem
