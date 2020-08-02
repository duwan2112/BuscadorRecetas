import React,{createContext,useState,useEffect} from 'react'

export const RecetasContext = createContext()


const RecetasProvider = props => {


    const [recetas,setRecetas] = useState({})
    const [busqueda,setBusqueda]= useState({
        nombre: '',
        categoria: ''
    })
    const [consultar,setConsultar]= useState(false)

    useEffect(()=> {
     if(consultar){
fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${busqueda.nombre}&c=${busqueda.categoria}`)
       .then(response => response.json())
    .then(result => setRecetas(result.drinks))
    setConsultar(false)
     }
       

    },[busqueda])

    return( 
    <RecetasContext.Provider
    value={{setBusqueda,setConsultar,recetas}}
    > 

    {props.children}

    </RecetasContext.Provider> )
}
export default RecetasProvider