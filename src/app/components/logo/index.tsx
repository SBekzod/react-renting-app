import React from "react";
import styled, { css } from "styled-components";
import tw from "twin.macro";

import CartLogoImg from '../../../assets/images/car-logo.png';

interface ILogoProps {
    color?: 'white' | 'dark'
}


const LogoContainer = styled.div`
    ${tw`
    flex
    items-center
    `};
`;

const LogoText = styled.div`
    ${tw`
        text-xl
        md:text-2xl
        text-black
        m-1
    `};

    ${({ color }: any) => color === 'white' ?
        css`${tw`text-white`}`
       :
        css`${tw`text-black`}`
    }
`;

const Image = styled.div`
    width:auto;
    ${tw`h-6 md:h-9`};
    img {
        width: auto;
        height: 100%;
    }
`;

export function Logo(props: ILogoProps) {

    const {color } = props;

    return <LogoContainer>
        <Image>
            <img src={CartLogoImg} />
        </Image>
        <LogoText color={color || 'dark'}>Yourcar.</LogoText>
    </LogoContainer>;
}