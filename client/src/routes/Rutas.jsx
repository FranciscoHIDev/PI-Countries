import React from 'react'
import {Route} from 'react-router-dom'
import Nav from '../components/Nav/Nav'
import LandingPage from '../components/LandingPage/LandingPage'
import Home from '../components/Home/Countries'
import Detail from '../components/Detail/Detail'
import About from '../components/About/About';

function Rutas() {
  return (
   <>
    <Nav/>
    <Route exact path="/" component={LandingPage} />
    <Route path="/home" component={Home} />
    <Route path="/detail/:id" ><Detail/>
    </Route>
    <Route path="/about" component={About} />
    
 


</>
   
  )
  
}

export default Rutas