import React from 'react';
import styled from 'styled-components';

export const MenuTrigger = ({onClick}) => {
     return (
          <Menu onClick={()=>{
               onClick();
               window.scrollTo(0,0);
               }}>
                    <MenuLine></MenuLine>
                    <MenuLine></MenuLine>
                    <MenuLine></MenuLine>
          </Menu>
     )
}

const Menu = styled.div`
     display: none;
     flex-direction: column;
     justify-content: space-between;
     width: 30px;
     height: 30px;
     margin: 30px 20px 0 0;
     @media screen and (max-width:1070px){
          display: flex;
     }
`;

const MenuLine = styled.div`
     width: 100%;
     height: 3px;
     background: #ffffff;
`;

export default MenuTrigger;
