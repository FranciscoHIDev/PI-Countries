const { DataTypes } = require('sequelize')

// Exportamos una funcion que define el modelo
// Luego le inyectamos la conexion a sequelize.
module.exports = (sequelize) => {
    // se define el modelo activity
    sequelize.define('activity', {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            allowNull: false,
            defaultValue: DataTypes.UUIDV4
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,

        },
        difficulty: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                max: 5,
                min: 1
            }
        },
        duration: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                max: 24,
                min: 1
            }
        },
        season: {
            type: DataTypes.ENUM('Summer', 'autumn', 'Winter', 'Spring'),
            allowNull: false
        },

    }, { timestamps: false })
}