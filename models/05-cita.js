'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cita extends Model {
   
    static associate(models) {


      Cita.belongsToMany(models,Odontologo,{
        foreignKey: "id_odontologo"
      });


      Cita.belongsToMany(models,Paciente,{
        foreignKey: "id_paciente"
      });
    }
  }
  Cita.init({
    id_odontologo:{
      type: DataTypes.INTEGER,
      allowNull: false
    },
    id_paciente:{
      type: DataTypes.INTEGER,
      allowNull: false
    },
    fecha: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        isDate: true,
        isAfter: "2023-04-17"
      }
    },
    horario: {
      type: DataTypes.TIME,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Cita',
    tableName: 'citas'
  });
  return Cita;
};