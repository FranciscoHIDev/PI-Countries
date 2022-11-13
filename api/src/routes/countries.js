const { Router } = require('express');
const { Country, Activity } = require('../db');
const { Op } = require('sequelize');
const router = Router();

router.get('/', async (req, res) => {
    const { name } = req.query
    const country = await Country.findAll({ include: Activity })
    const countryName = await Country.findAll({
        where: {
            name: {
                [Op.iLike]: `%${name}%`
            },
        },
        include: Activity
    })
    try {
        if (name) {
            countryName.length ? res.status(200).send(countryName) :
                res.status(404).send(`No se encontro el país ${name}`)
        }
        else {
            res.send(country)
        }

    } catch (error) {
        res.status(404).send(error)

    }
})

// Ruta por ID

router.get('/:id', async (req, res) => {
    const { id } = req.params

    try {
        const countryId = await Country.findByPk(id, {
            include: {
                model: Activity
            }
        })
        res.send(countryId)

    } catch (error) {
        res.send(error)
    }


})


module.exports = router;