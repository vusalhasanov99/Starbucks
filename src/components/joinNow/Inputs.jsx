import React  from 'react'
import Input from './Input'
import { nanoid } from 'nanoid'

function Inputs({ title, inputArr }) {


  return (
    <div className='inputs'>
      <h2>{title}</h2>
      {inputArr.map(item => (
        <Input key={nanoid()}  {...item} />))}
    </div>
  )
}

export default Inputs