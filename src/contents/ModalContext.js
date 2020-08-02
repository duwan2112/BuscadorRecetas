import React,{createContext,useState,useEffect} from 'react'

export const ModalContext= createContext()

const ModalProvider = props => {
  
 const [id,setId]= useState(null)
 const [informacion,setReceta]=useState({})
 useEffect(()=> {
 if(!id) return 

 fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
   .then(response => response.json())
   .then(result => setReceta(result.drinks[0]))


  
  
 },[id]) 
 

 return(
   <ModalContext.Provider
     value={{

         setId,informacion,setReceta

     }}
    >
        {props.children}
   </ModalContext.Provider> 

 )


}
export default ModalProvider