import axios from 'axios'
export const GET_ALL_COUNTRIES = "GET_ALL_COUNTRIES"
export const GET_COUNTRY_ID = "GET_COUNTRY_ID"

const INFO_DB_URL = "http://localhost:3001/countries";

export const getAllCountries = () => async (dispatch) => {
    try {
        const countries = await axios.get(INFO_DB_URL);
        console.log(countries)
        dispatch({
            type: "GET_ALL_COUNTRIES",
            payload: countries.data

        });
    } catch (error) {
        return console.log(error)
    }
}



export const getCountryId = (id) => async (dispatch) => {

    try {
        const country = await axios.get(`${INFO_DB_URL}/${id}`)
        dispatch({
            type: "GET_COUNTRY_ID",
            payload: country.data
        })
    } catch (error) {
        return console.log(error)
    }
}