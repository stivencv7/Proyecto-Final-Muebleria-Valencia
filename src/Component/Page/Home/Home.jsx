import React from 'react'
import { ContentPageMain } from '../../Layout/ContentPageMain/ContentPageMain'
import { MainHeader } from '../../Layout/MainHeader/MainHeader'
//import { MainHeader } from '../../Layout/MainHeader/MainHeader'
//import { PaginaPrincipal } from '../../Layout/PaginaPrincipal/PaginaPrincipa

export const Home = () => {
    return (
        <div id='container_Main'>
            <MainHeader/>
            <div  className='content-conteMain'>
                <ContentPageMain/>
            </div>
        </div>
    )
}
