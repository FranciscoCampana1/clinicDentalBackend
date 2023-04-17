"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Usuario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here


      Usuario.hasMany(models.Odontologo, {
        foreignKey: "id_usuario",
      });

      Usuario.belongsTo(models.Role, {
        foreignKey: "id_role",
      });

      Usuario.belongsTo(models.Paciente, {
        foreignKey: "id_usuario",
      })
    
    
    }
  }
  Usuario.init(
    {
      nombre: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isAlpha: true,
          min: 2
        },
      },
      apellidos: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isAlpha:true
        },
      },
      fecha_de_nacimiento: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        validate: {
          isDate: true,
          isAfter: "1900-01-01",
        },
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isEmail: true,
          isLowercase: true,
        },
      },
      telefono: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          inInt: true,
          isNumeric: true,
          min: 9
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          min: 8
        },
      },

      id_role: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Usuario",
      tableName: "usuarios"
    }
  );
  return Usuario;
};
