'use strict';
module.exports = (sequelize, DataTypes) => {
  const Conductores = sequelize.define('Conductores', {
    name: DataTypes.STRING
  }, {});
  Conductores.associate = function(models) {
    Conductores.belongsTo(models.Escuderia,{
      
    })
  };
  return Conductores;
};