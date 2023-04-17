"use strict";
const { Op } = require("sequelize");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "odontologos",
      [
        {
          id_usuario:6,
          matriculaOdontologo: 1234566668,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id_usuario:7,
          matriculaOdontologo: 1234774568,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id_usuario:8,
          matriculaOdontologo: 1234114568,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {},
};