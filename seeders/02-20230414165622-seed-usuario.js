"use strict";
const { Op } = require("sequelize");
const {hash} = require("../_util/hash");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
   async up(queryInterface, Sequelize) {
      await queryInterface.bulkInsert(
         "usuarios",
         [
            {
               nombre: "Jose",
               apellidos: "Palacios",
               fecha_de_nacimiento: "1996-05-01",
               email: "jose@jose.com",
               telefono: 1233456789,
               password: hash("12345678"),
               createdAt: new Date(),
               updatedAt: new Date(),
               id_role: 1
            },
            {
               nombre: "Marta",
               apellidos: "Garcia",
               fecha_de_nacimiento: "2002-09-10",
               email: "marta@jose.com",
               telefono: 1233456789,
               password: hash("12345678"),
               createdAt: new Date(),
               updatedAt: new Date(),
               id_role: 1
            },
            {
               nombre: "pepita",
               apellidos: "Pérez",
               fecha_de_nacimiento: "1966-07-23",
               email: "marta@joseadg.com",
               telefono: 1233456789,
               password: hash("12345678"),
               createdAt: new Date(),
               updatedAt: new Date(),
               id_role:1
            },
            {
               nombre: "pepa",
               apellidos: "Pérez",
               fecha_de_nacimiento: "1966-07-23",
               email: "marta@joseadg.com",
               telefono: 1233456789,
               password: hash("12345678"),
               createdAt: new Date(),
               updatedAt: new Date(),
               id_role:1
            },
            {
               nombre: "Ernesto",
               apellidos: "Pérez",
               fecha_de_nacimiento: "1966-07-23",
               email: "marta@joseadg.com",
               telefono: 1233456789,
               password: hash("12345678"),
               createdAt: new Date(),
               updatedAt: new Date(),
               id_role:1
            },
            {
               nombre: "odontologo ernesto",
               apellidos: "Pérez",
               fecha_de_nacimiento: "1966-07-23",
               email: "marta@joseadg.com",
               telefono: 1233456789,
               password:"asdfghjkld",
               createdAt: new Date(),
               updatedAt: new Date(),
               id_role:2
            },
            {
               nombre: "odontologo juan",
               apellidos: "Pérez",
               fecha_de_nacimiento: "1966-07-23",
               email: "marta@joseadg.com",
               telefono: 1233456789,
               password:"asdfghjkld",
               createdAt: new Date(),
               updatedAt: new Date(),
               id_role:2
            },
            {
               nombre: "odontologo pepe",
               apellidos: "Pérez",
               fecha_de_nacimiento: "1966-07-23",
               email: "Cesar@joseadg.com",
               telefono: 1233456789,
               password: hash("12345678"),
               createdAt: new Date(),
               updatedAt: new Date(),
               id_role:2
            },
         ],
         {}
      );
   },

   async down(queryInterface, Sequelize) {
      // await queryInterface.bulkDelete("Usuarios", {
      //    [Op.or]: [
      //       { nombre: "Jose" },
      //       { nombre: "Marta" },
      //       { nombre: "Ernesto" },
      //       { nombre: "Vicente" },
      //       { nombre: "Enrrique" },
      //       { nombre: "Terry" },
      //       { nombre: "Sheldon" },
      //       { nombre: "Terrill" },
      //       { nombre: "Miles" },
      //       { nombre: "Mavis" },
      //       { nombre: "Alison" },
      //       { nombre: "Oleta" },
      //       { nombre: "Ewell" },
      //    ],
      // });
   },
};