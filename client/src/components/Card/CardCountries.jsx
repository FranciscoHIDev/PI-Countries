import React from 'react'
import { Link } from "react-router-dom"
import styled from 'styled-components'


function CardCountries({ id,name,flag,continent}) {
  return (
   <CardStyled>
   <img src={flag} alt="bandera"/>    
   <h3>Nombre: {name}</h3>  
   <h3>Continente: {continent}</h3> 
   <Link to={`/detail/${id}`} >
    <button className='BTN'>Ver detalles</button>
   </Link>
   
   
     
   </CardStyled>
  )
}

const CardStyled = styled.div`
display: flex;
flex-direction: column;
width: 230px;
margin:1rem;
margin-left: 1rem;
box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
border-radius:10px;
padding: 8px;




`

export default CardCountries