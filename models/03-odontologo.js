'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Odontologo extends Model {
    
    static associate(models) {
      // define association here

      Odontologo.belongsTo(models.Usuario,{
        foreignKey: "id_usuario",
      });

      
      Odontologo.belongsToMany(models.Paciente, {
        through: "Cita" ,
        foreignKey: "id_odontologo",
      });
    }
  }
  Odontologo.init({
    id_usuario: {
      type: DataTypes.INTEGER,
      allowNull:false
    },
    matriculaOdontologo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min:8
      }
    }
  }, {
    sequelize,
    modelName: 'Odontologo',
    tableName: 'odontologos'
  });
  return Odontologo;
};