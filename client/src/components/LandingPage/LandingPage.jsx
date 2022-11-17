import React from 'react'
import {Link} from 'react-router-dom'



function LandingPage() {
  return (
    <>
    <h1>Proyecto Individual Henry</h1>

    <h2>Countries</h2>

  <Link to={"/home"}>
    <button>Iniciar</button>
    </Link>
    
    </>
    
  )
}

export default LandingPage