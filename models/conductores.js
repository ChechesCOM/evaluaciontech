'use strict';
module.exports = (sequelize, DataTypes) => {
  const Conductores = sequelize.define('Conductores', {
    name: DataTypes.STRING
  }, {});
  Conductores.associate = function(models) {
    // associations can be defined here
  };
  return Conductores;
};