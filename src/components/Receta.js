

import React,{useContext,useState,useRef,useEffect} from 'react'
import styled from 'styled-components';
import {ModalContext} from '../contents/ModalContext'
import Modal from '@material-ui/core/Modal' 
import {makeStyles} from '@material-ui/core/styles'

function getModalStyled(){
    const top= 50;
    const left= 50; 
    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%,-${left}%)`,
    }
}
const useStyles = makeStyles(theme => ({
    paper: {
      position: 'absolute',
      width: 300,
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
}));

const RecetaStyled = styled.div`
  width: 300px;
  min-height: 100px;
  background: rgba(255,255,255,.7);
  margin: 10px;
  border-radius: 5px;
  h1{
      font-size: 25px !important; 
      padding: 10px;
  }
  img{
      width: 90%;
      object-fit: cover;
      border-radius: 4px;
  }
  button{
    background: #ec3a49;
   width: 80%;
   margin: 20px; 
   padding: 15px;
   border: none;
   border-radius: 4px;
   color: white;
   font-size: 20px; 
   font-weight: 600;

}
`;


export default function Receta({receta}) {

    const [modalStyle] = useState(getModalStyled)
    const [open,setOpen] = useState(false)
    const [show,setShow] = useState(false)
    const ref=useRef()
    useEffect(()=>{

      const observer= new window.IntersectionObserver((entries)=>{
         const {isIntersecting} = entries[0];
         if(isIntersecting) {
              setShow(true); 
              observer.disconnect();
            }
      })
         observer.observe(ref.current)
    },[ref])

    const classes = useStyles()
    const handleOpen= () => {
         setOpen(true)
    }
    const handleClose = () => {
        setOpen(false)
    }

    const {informacion,setId,setReceta} = useContext(ModalContext)

    const handleButton = () => { 
        setId(receta.idDrink)
        handleOpen()
    }


    const mostrarIngredientes = informacion => {
        let ingredientes= [];
        for(let i=1; i<16; i++){
            if(informacion[`strIngredient${i}`]){
                ingredientes.push(
                    <li> {informacion[`strIngredient${i}`]}{informacion[`strMeasure${i}`]} </li>
                )
            }
        }
        return ingredientes
    }

    return (
        <RecetaStyled ref={ref} > 

        {show && <>  <h1> {receta.strDrink} </h1>
           <img loading="lazy" src={receta.strDrinkThumb} alt={`Imagen de ${receta.strDrink}`} />
           <button onClick={handleButton}> Ver Receta</button>
           <Modal
           open={open}
           onClose={()=>{
               setId(null)
               handleClose();
               setReceta({})
           }}
           
           >
                <div style={modalStyle} className={classes.paper}>  
        <h2>{informacion.strDrink}</h2> 
        <h3 className="mt-4"> Instrucciones </h3>
        <p> {informacion.strInstructions} </p>
        <img className="img-fluid my-4" src={informacion.strDrinkThumb} alt=""/>
         <h3>Ingredientes y cantidades</h3>
         <ul> 
             {mostrarIngredientes(informacion)}
              </ul> 
         
                 </div>
               
                </Modal> </>  }

          
        </RecetaStyled>
    )
}
