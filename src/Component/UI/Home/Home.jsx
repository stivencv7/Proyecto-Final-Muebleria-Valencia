import React from 'react'
import { Categories } from '../Categories/Categories'
import { Navigator } from '../Navigator/Navigator'
import { Comp_Input } from '../Comp_Input/Comp_Input' 
import { Tips } from './Tips'

export const Home = () => {
 
  return (
    <div>
      <div>
        <Navigator/>
      </div>
        <Categories/>
        <div>
          <Comp_Input type="number" />
          <Comp_Input type="number"/>
        </div>
        <div>
        </div>
    </div>
  )
}
