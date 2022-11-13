const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le inyectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // se define el modelo country
  sequelize.define('country', {
    id: {
      type: DataTypes.STRING(3),
      primaryKey: true,
      allowNull: false

    },
    name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    flag: {
      type: DataTypes.STRING,
      allowNull: true
    },
    continent: {
      type: DataTypes.STRING,
      allowNull: true
    },
    capital: {
      type: DataTypes.STRING,
      allowNull: true
    },
    subregion: {
      type: DataTypes.STRING,
      allowNull: true
    },
    area: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    population: {
      type: DataTypes.INTEGER,
      allowNull: true
    },

  }, { timestamps: false });
};