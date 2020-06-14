import React from 'react'
import styled from 'styled-components'

import MainLogo from '../images/word-token-logo-1.png'



const Logo = () => {
    return (<LogoWrapper>
                <img src={MainLogo} />
            </LogoWrapper>)
}


export default Logo 



const LogoWrapper = styled.div`
    text-align: center;
    img {
        max-width: 300px;
    }
`

