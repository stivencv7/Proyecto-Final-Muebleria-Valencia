/**import React from 'react'
import { Logo } from '../../UI/Logo/Logo'
import { NavHome } from '../../UI/NavHome/NavHome'
import { SubHeader } from '../../Layout/SubHeader/SubHeader'
import { ContentPageMain } from '../ContentPageMain/ContentPageMain'
export const MainHeader = () => {
  return (
    <>
    <header className='header-main'>
        <Logo estylo='title-main'></Logo>
    
        <NavHome />
    </header>
    <SubHeader />
    <ContentPageMain/>
    </>
  )
}
**/
import React from 'react'
import { InputAutocomplete } from '../../UI/InputAutocomplete/InputAutocomplete'
import { Logo } from '../../UI/Logo/Logo'

import { NavHome } from '../NavHome/NavHome'
import { SubHeader } from '../SubHeader/SubHeader'

export const MainHeader = () => {
  return (
    <div className='header-user'>
      <header className='header-main'>
        <Logo estylo={'title-main'}/>
        <InputAutocomplete/>
        <NavHome/>
      </header>
      <SubHeader/>
    </div>
  )
}
