'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Alphabet extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Alphabet.init({
    alphabet: DataTypes.STRING,
    value: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Alphabet',
  });
  return Alphabet;
};