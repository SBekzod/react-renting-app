import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

import CartLogo from '../../../assets/images/time-logo.png';

const LogoContainer = styled.div`
    ${tw`
    flex
    items-center
    `};
`; 

const LogoTextContainer = styled.div`
    ${tw`
    text-xl
    md:text-2xl
    text-black
    m-1
    `};
`; 

const Image = styled.div`
    width:auto;
    ${tw`h-6 md:h-9`};
    img {
        width: auto;
        height: 100%;
    }
`;

export function Logo() {
    return <LogoContainer>
        <Image>
            <img src={CartLogo}/>
        </Image>
        <LogoTextContainer>buyTime.</LogoTextContainer>
    </LogoContainer>;
}