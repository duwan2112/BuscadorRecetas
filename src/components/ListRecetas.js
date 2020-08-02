import React,{useContext} from 'react'
import styled from 'styled-components';
import {RecetasContext} from '../contents/RecetasContext'
import Receta from './Receta'
const ListRecetasStyled = styled.div`
text-align: center;
display: flex;
flex-wrap: wrap;
justify-content: center;
margin-top: 20px;
h1{
    width: 100%;
   font-weight: 300; 
   font-size: 3rem;
}

  
`;


export default function ListRecetas() {

   const {recetas} = useContext(RecetasContext)


    return (
        <ListRecetasStyled>
            <h1>LISTADO</h1>
        { recetas.length > 0 ?  recetas.map((receta)=> 
  
          <Receta key={receta.idDrink} receta={receta}/> 

        )  : null

        }
        </ListRecetasStyled>
    )
}
