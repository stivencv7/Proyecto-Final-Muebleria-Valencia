import React from 'react'
import { ContentPageMain } from '../../Layout/ContentPageMain/ContentPageMain'
import { MainHeader } from '../../Layout/MainHeader/MainHeader'
import { Footer } from '../../UI/Footer/Footer'
//import { MainHeader } from '../../Layout/MainHeader/MainHeader'
//import { PaginaPrincipal } from '../../Layout/PaginaPrincipal/PaginaPrincipa

export const Home = () => {
    return (
        <div id='container_Main'>
            <MainHeader/>
            <ContentPageMain/>
            <br /><br />
            <footer>
                <Footer/>
            </footer>
        </div>
    )
}
