"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "citas",
      [
        {
          id_odontologo: 1,
          id_paciente: 1,
          fecha: "2023-04-20",
          horario: "15:00",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id_odontologo: 2,
          id_paciente: 2,
          fecha: "2023-04-20",
          horario: "14:00",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id_odontologo: 3,
          id_paciente: 3,
          fecha: "2023-04-20",
          horario: "13:00",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id_odontologo: 1,
          id_paciente: 4,
          fecha: "2023-04-20",
          horario: "17:00",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id_odontologo: 2,
          id_paciente: 5,
          fecha: "2023-04-20",
          horario: "18:00",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id_odontologo: 3,
          id_paciente: 2,
          fecha: "2023-04-20",
          horario: "19:00",
          createdAt: new Date(),
          updatedAt: new Date()
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("citas", null, {});
  },
};
