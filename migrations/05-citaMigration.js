"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("citas", {
     
      id_odontologo: {
        primaryKey: true,
        type: Sequelize.INTEGER,
        allowNull: false,
        refereces: {
          model: "odontologos",
          key: "id",
        },
      },
      id_paciente: {
        primaryKey:true,
        type: Sequelize.INTEGER,
        allowNull: false,
        refereces: {
          model: "pacientes",
          key: "id",
        },
      },
      fecha: {
        type: Sequelize.DATEONLY,
        allowNull: false,
      },
      horario: {
        type: Sequelize.TIME,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("citas");
  },
};
