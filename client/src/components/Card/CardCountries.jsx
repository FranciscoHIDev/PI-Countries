import React from 'react'

function CardCountries({ name,flag,continent}) {
  return (
   <>
   <img src={flag} alt="bandera"></img>
 
   <h3>Nombre: {name}</h3>  
   <h3>Continente: {continent}</h3>     
   </>
  )
}

export default CardCountries