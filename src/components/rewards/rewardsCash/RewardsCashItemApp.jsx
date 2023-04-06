import React from 'react'

function RewardsCashItemApp({img,title,description}) {
  return (
    <div className="rewardsCashItemApp">
      <div className="img">
        <img src={img} alt="" />
      </div>
      <div>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default RewardsCashItemApp
