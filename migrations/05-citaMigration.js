'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('citas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      id_odontologo: {
        type: Sequelize.INTEGER,
        allowNull: false,
        refereces: {
          model: "odontologos",
          key: "id",
        }

      },
      id_paciente: {
        type: Sequelize.INTEGER,
        allowNull: false,
        refereces: {
          model: "pacientes",
          key: "id",
        }

      },
      fecha: {
        type: Sequelize.DATE,
        allowNull: false,

      },
      horario: {
        type: Sequelize.TIME,
        allowNull: false,

      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('citas');
  }
};