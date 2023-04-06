import React from 'react'
import RewardsHeader from './rewardsHeader/RewardsHeader'
import RewardsMain from './rewardsMain/RewardsMain'
import RewardsGetting from './rewardsGetting/RewardsGetting'
import RewardsGetFavorites from './rewardsGetFavorites/RewardsGetFavorites'
import RewardsEndlessExtras from './rewardsEndlessExtras/RewardsEndlessExtras'
import RewardsCash from './rewardsCash/RewardsCash'
import RewardsKeep from './rewardsKeep/RewardsKeep'
import RewardsQuestions from './rewardsQuestions/RewardsQuestions'
import RewardsText from './rewardsText/RewardsText'
function Rewards() {
  return (
    <div className='rewards'>
     <RewardsHeader/>
     <RewardsMain/>
     <RewardsGetting/>
     <RewardsGetFavorites/>
     <RewardsEndlessExtras/>
     <RewardsCash/>
     <RewardsKeep/>
     <RewardsQuestions/>
     <RewardsText/>
    </div>
  )
}

export default Rewards
