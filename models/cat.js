'use strict';
module.exports = function(sequelize, DataTypes) {
  var Cat = sequelize.define('Cat', {
    name: DataTypes.STRING,
    age: DataTypes.INTEGER,
    enjoys: DataTypes.TEXT,
    city: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
      }
    }
  });
  return Cat;
};
