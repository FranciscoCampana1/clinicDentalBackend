"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("citas", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },

      id_odontologo: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "odontologos",
          key: "id",
        },
      },
      id_paciente: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
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
