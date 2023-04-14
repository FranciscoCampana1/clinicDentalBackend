"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Paciente extends Model {
    static associate(models) {


      Paciente.hasMany(models.Cita, {
        foreignKey: "id_paciente"
      });


      Paciente.belongsTo(models.Usuario,{
        foreignKey: "id_usuario"
      });
    };

    
  }
  Paciente.init(
    {
      id_usuario: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Paciente",
      tableName: "pacientes",
    }
  );
  return Paciente;
};
