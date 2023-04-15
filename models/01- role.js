'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Role extends Model {
  
    static associate(models) {
      Role.hasMany(models.Usuario, {
        as: "Rol de usuarios",
        foreignKey: "id_role",
      })
       
    }
  }
  Role.init({
    rolUsuario: {
      type: DataTypes.STRING,
      enum: ["user", "admin"],
      default: "user",
    
    }
  }, {
    sequelize,
    modelName: 'Role',
    tableName: 'roles',
  });
  return Role;
};