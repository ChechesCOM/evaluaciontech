'use strict';
module.exports = (sequelize, DataTypes) => {
  const carros = sequelize.define('carros', {
    name: DataTypes.STRING
  }, {});
  carros.associate = function(models) {
    compras.belongsTo(models.conductores, {
  });
  return carros;
}};