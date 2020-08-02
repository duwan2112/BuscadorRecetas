import React from 'react'
  

import styled from 'styled-components';

const HeaderStyled = styled.div`
  background: #ec3a49;
  color: white;
  padding: 3rem 0 ;
 text-align: center;
 h1{
     font-weight: 900;
     font-size: 2.7rem;
     text-shadow: 7px 2px 5px black;

 }
`;


export default function Header() {
    return (
        <HeaderStyled>
            <h1> Busca Recetas de Bebidas</h1>
            
        </HeaderStyled>
    )
}
