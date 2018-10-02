'use strict';
module.exports = (sequelize, DataTypes) => {
  const Escuderia = sequelize.define('Escuderia', {
    name: DataTypes.STRING
  }, {});
  Escuderia.associate = function(models) {
    Escuderia.hasMany(models.conductores, {
      onDelete: 'cascade'
    });
  };
  return Escuderia;
};