import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { Logo } from '../logo';

const NavbarContainer = styled.div`
  min-height: 68px;
  display: flex;
  
  ${tw`
    w-full
    max-w-2xl
    flex
    flex-row
    items-center
    lg:pl-12
    lg:pr-12
    justify-between
    `};
`;

export function Navbar() {
    return <NavbarContainer>
       <Logo/>
    </NavbarContainer>;
};