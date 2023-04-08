import React from 'react'
import './FindStore.css'
import FindStoreContent from './FindStoreContent'
import FindStoreMap from './FindStoreMap'

function FindStore() {
  return (
    <div className='findStore d-flex'>
      <FindStoreContent/>
      <FindStoreMap/>
    </div>
  )
}

export default FindStore
