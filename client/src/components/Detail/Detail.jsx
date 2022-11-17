import React, {useEffect} from 'react'
import { useDispatch, useSelector} from 'react-redux'
import {useParams} from 'react-router-dom'
import {getCountryId} from '../../redux/actions'
function Detail (){

const params = useParams();
const dispatch = useDispatch();
const country = useSelector((state) => state.country);

useEffect (() => {
dispatch (getCountryId((params.id)));
}, [dispatch, params.id]) ;

return (
<>

{ country? (
<div>

<img src={country?.flag} alt={"bandera"}/>
 <h3>Id: {country?.id}</h3>
 <h3>Nombre: {country?.name}</h3>     
 <h3>Continente: {country?.continent}</h3>
 <h3>Capital: {country?.capital}</h3>
 <h3>Subregion: {country?.subregion}</h3>
 <h4>Area: {country?.area} km</h4>
 <h4>Población: {country?.population}</h4>
 <h4>Actividades: {country?.activities}</h4>     
 </div>
):(
<img src='https://acegif.com/wp-content/uploads/loading-4.gif' alt='loading' />

    )
  }
  </>
  )
}


   


        
 
      
  


export default Detail