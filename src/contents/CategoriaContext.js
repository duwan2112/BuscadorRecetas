import React,{createContext,useState,useEffect} from 'react'

export const CategoriasContext = createContext();

const CategoriasProvider = props => {
     
    



    const [categorias,setCategorias]=useState([])

     useEffect(()=>{

    fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list')
    .then(response => response.json())
    .then(result => setCategorias(result.drinks))



     },[])

     return ( <CategoriasContext.Provider
         value={{
             categorias
         }}
     
     > {props.children} </CategoriasContext.Provider>  )
}

export default CategoriasProvider;