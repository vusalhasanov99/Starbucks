import React from 'react'
import Section1 from './sections/Section1'
import Section2 from './sections/Section2'
import Section3 from './sections/Section3'
import { Outlet } from 'react-router-dom'


function Main() {
  return (
    <div>
      <Section1/>
      <Section2/>
      <Section3/>
      <Outlet/>
    </div>
  )
}

export default Main
