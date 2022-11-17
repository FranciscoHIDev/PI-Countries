import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getAllCountries} from '../../redux/actions'
import CardCountries from './../Card/CardCountries';


function Countries() {

  const dispatch = useDispatch()

  const countries = useSelector((state) => state.countries)

  React.useEffect(() => {
    dispatch(getAllCountries());
}, [dispatch]);

  return (
    <>
    <h1>Cargando los paises...</h1>
    
   {countries.length > 0 &&
   countries?.map((c) => (
    <CardCountries key={c.id}  {...c} />
   ))}    
    </>
  )
}

export default Countries