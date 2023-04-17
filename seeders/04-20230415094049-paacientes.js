"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "pacientes",
      [
        {
          id_usuario: 1,
          createdAt: new Date(),
          updatedAT: new Date()
        },
        {
          id_usuario: 2,
          createdAt: new Date(),
          updatedAT: new Date()
        },
        {
          id_usuario: 3,
          createdAt: new Date(),
          updatedAT: new Date()
        },
        {
          id_usuario: 4,
          createdAt: new Date(),
          updatedAT: new Date()
        },
        {
          id_usuario: 5,
          createdAt: new Date(),
          updatedAT: new Date()
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
      await queryInterface.bulkDelete('pacientes', null, {});
  },
};
