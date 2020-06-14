import React from 'react'
import styled from 'styled-components'

import HomeBanner from '../assets/home-banner-2.png'


const Hero = () => {

    return (<HeroWrapper>
                <h1>Get powerful insights from <br/>social media comments.</h1>
                <img src={HomeBanner} />
            </HeroWrapper>)
}

export default Hero


const HeroWrapper = styled.div`
    padding-top: 50px;

    h1 {
        text-align: center;
        font-family: 'acherus-militant-1-light-otf';
    }
`