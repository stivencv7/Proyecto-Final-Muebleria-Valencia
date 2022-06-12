import React from 'react'
import { Categories } from '../Categories/Categories'
import { Navigator } from '../Navigator/Navigator'


export const Home = () => {
  return (
    <div>
      <div>
        <Navigator/>
      </div>
        <Categories/>
    </div>
  )
}
