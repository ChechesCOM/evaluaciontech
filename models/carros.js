'use strict';
module.exports = (sequelize, DataTypes) => {
  const carros = sequelize.define('carros', {
    name: DataTypes.STRING
  }, {});
  carros.associate = function(models) {
    carros.belongsTo(models.conductores, {
  });
  return carros;
}};