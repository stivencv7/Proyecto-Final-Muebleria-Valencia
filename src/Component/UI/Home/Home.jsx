import React from 'react'
import { Categories } from '../Categories/Categories'
import { Navigator } from '../Navigator/Navigator'
import { Comp_Input } from '../Comp_Input/Comp_Input' 
import { Pruebas } from './Pruebas'

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
    </div>
  )
}
