import React from 'react'
import styled from 'styled-components'

import MainLogo from 'src/assets/images/word-token-logo-bold.png'



const Logo = () => {
    return (<LogoWrapper>
                <img src={MainLogo} />
            </LogoWrapper>)
}


export default Logo 



const LogoWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 90px; 

    p {
        color: #1C7AE4;
        font-size: 30px;
        text-decoration: none;
        margin: 0;
        font-family: 'acherus-militant-1-bold-otf';
        font-weight: 300;
    }

    img {
        width: 100%;
        margin: 0;
    }
`

