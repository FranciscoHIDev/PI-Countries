const { Router } = require('express');
const { Country, Activity } = require('../db')

const router = Router();

router.post('/', async (req, res) => {
    const { nameCountry, name, difficulty, duration, season } = req.body

    try {
        const search = await Activity.findOne({ where: { name: name } })
        if (!search) {
            const newActivity = await Activity.create({ name, difficulty, duration, season })
            const countryDb = await Country.findAll({
                where: {
                    name: nameCountry
                }
            })
            await newActivity.addCountry(countryDb)
            return res.send(`msg:La actividad ${name} se creo correctamente`)
        } else {
            return res.send(`msg: La actividad ${name} ya existe`)
        }
    } catch (error) {
        return res.send("La actividad no se pudo crear por" + error)

    }
})

router.get('/', async (req, res) => {
    try {
        const allActivities = await Activity.findAll({ include: { model: Country } })
        res.send(allActivities)

    } catch (error) {
        res.send(`Este es el error of get activities por (${error})`)

    }
})

module.exports = router;