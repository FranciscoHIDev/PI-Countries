const { Country, Activity } = require('../db');
const axios = require('axios')

const API_All_URL = "https://restcountries.com/v3/all"

const cargaBd = async () => {

    const allCountries = await Country.findAll({
        include: Activity
    })

    if (!allCountries.length) {

        const { data } = await axios.get(API_All_URL)
        const apiInfo = data?.map((el) => {
            return {
                id: el.cca3,
                name: el.name.common,
                flag: el.flags[0],
                continent: el.continents[0],
                capital: el.capital ? el.capital[0] : 'Este país no tiene capital',
                subregion: el.subregion ? el.subregion : 'No tiene subregion',
                area: el.area,
                population: el.population
            }

        })
        await Country.bulkCreate(apiInfo)
        console.log("Se guardo con exito la información")



    }
}

module.exports = {
    cargaBd
}







module.exports = { cargaBd }