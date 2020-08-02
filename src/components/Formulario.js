import React,{useContext,useState} from 'react'
import styled from 'styled-components';
import {CategoriasContext} from '../contents/CategoriaContext'
import {RecetasContext} from '../contents/RecetasContext'
const FormularioStyled = styled.div`
  text-align: center;
  form{
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
  }
  h3{
      padding: 2rem 0 ;
      font-weight: 400;
  }
  button{
    background: #ec3a49;
      color: white;
      font-weight: 800;
      letter-spacing: 1px;
      &:hover{
         background: rgba(236,58,73,.8); 
      }
  }

  select{
      
      color: rgba(0,0,0,.7);
  }
  input,select,button{
      width: 300px;
      box-shadow: inset 0px 0px 5px black;
      margin: 0 20px; 
      padding: 13px;
      border-radius: 2px;
      border: none;
      &:focus{
          outline: none;
      }
  }
`;


export default function Formulario() {
 
    const {categorias} = useContext(CategoriasContext)
    const {setBusqueda,setConsultar} = useContext(RecetasContext)

    const [option,setOption] = useState({
        nombre: '',
        categoria: ''
    })
     
    const handleOption = e => {
        setOption({...option,[e.target.name] : e.target.value})
    }

    const handleSubmit = e => { 
        e.preventDefault();
        setConsultar(true)
        setBusqueda(option)
    }
     
    return (
        <FormularioStyled>
            <h3>Busca bebidas por Categoria o Ingrediente </h3>
            <form onSubmit={handleSubmit}> 
                <input onChange={handleOption} placeholder="INGRESA UN NOMBRE..."  type="text" name="nombre" id=""/> 
                <select onChange={handleOption}  name="categoria" > 
                <option value="seleccionar"> --SELECCIONAR-- </option>  
                 { categorias.map((categoria)=> 
                     <option key={categoria.strCategory} value={categoria.strCategory}  > {categoria.strCategory} </option> 
                 )

                 }
                </select>
                <button type="submit">Buscar Bebida</button>
            </form>
        </FormularioStyled>
    )
}
