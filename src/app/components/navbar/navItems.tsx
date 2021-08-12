import React from "react";
import styled, { css } from "styled-components";
import tw from "twin.macro";
import { slide as Menu } from "react-burger-menu";
import { useMediaQuery } from "react-responsive";
import { SCREENS } from "../responsive/index";
import menuStyles from "./menuStyles";

const ListContainer = styled.ul`
 ${tw`
    flex
    list-none
 `};
`;

const NavItem = styled.li<{ mob_menu?: any }>`
 ${tw`
   font-medium
   text-xs
   md:text-base
   text-black
   mr-1
   md:mr-5 
   cursor-pointer
   transition
   duration-300
   ease-in-out
   hover:text-gray-700
 `};

   ${({ mob_menu }) => mob_menu && css`
      ${tw`
         text-white
         text-xl
         mb-3
         focus:text-white
      `}
   `}

`;


export function NavItems() {

   const isMobile = useMediaQuery({ maxWidth: SCREENS.sm });
   console.log(`isMobile: ${isMobile}`);
   if (isMobile) {
      return <Menu right styles={menuStyles}>
         <ListContainer>
            <NavItem mob_menu>
               <a href="#">Home</a>
            </NavItem>
            <NavItem mob_menu>
               <a href="#">Cars</a>
            </NavItem>
            <NavItem mob_menu>
               <a href="#">Services</a>
            </NavItem>
            <NavItem mob_menu>
               <a href="#">Contact</a>
            </NavItem>
         </ListContainer>
      </Menu>
   }

   return <ListContainer>
      <NavItem style={{"color": "red"}} >
         <a href="#">Home</a>
      </NavItem>
      <NavItem>
         <a href="#">Cars</a>
      </NavItem>
      <NavItem>
         <a href="#">Services</a>
      </NavItem>
      <NavItem>
         <a href="#">Contact</a>
      </NavItem>
   </ListContainer>
}