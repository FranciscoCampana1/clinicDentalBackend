"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Roles",
      [
        {
          rolUsuario: "user",
          createdAt:new Date(),
          updatedAt:new Date()
        },
        {
          rolUsuario: "admin",
          createdAt:new Date(),
          updatedAt:new Date()
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
 
      await queryInterface.bulkDelete('Roles', null, {});
     
  },
};
