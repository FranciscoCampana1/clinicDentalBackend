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
               email: "marta@marta.com",
               telefono: 1233456789,
               password: hash("12345678"),
               createdAt: new Date(),
               updatedAt: new Date(),
               id_role: 1
            },
            {
               nombre: "Robert",
               apellidos: "Pérez",
               fecha_de_nacimiento: "1966-07-23",
               email: "robert@robert.com",
               telefono: 1233456789,
               password: hash("12345678"),
               createdAt: new Date(),
               updatedAt: new Date(),
               id_role:1
            },
            {
               nombre: "Alice",
               apellidos: "Pérez",
               fecha_de_nacimiento: "1966-07-23",
               email: "alice@alice.com",
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
               email: "ernesto@ernesto.com",
               telefono: 1233456789,
               password: hash("12345678"),
               createdAt: new Date(),
               updatedAt: new Date(),
               id_role:1
            },
            {
               nombre: "Jack ",
               apellidos: "Odontologo",
               fecha_de_nacimiento: "1966-07-23",
               email: "jack@jack.com",
               telefono: 1233456789,
               password: hash("12345678"),
               createdAt: new Date(),
               updatedAt: new Date(),
               id_role:3
            },
            {
               nombre: "Ribs",
               apellidos: "Odontologo",
               fecha_de_nacimiento: "1966-07-23",
               email: "ribs@ribs.com",
               telefono: 1233456789,
               password: hash("12345678"),
               createdAt: new Date(),
               updatedAt: new Date(),
               id_role:3
            },
            {
               nombre: "Antonio",
               apellidos: "Odontologo",
               fecha_de_nacimiento: "1966-07-23",
               email: "antonio@antonio.com",
               telefono: 1233456789,
               password: hash("12345678"),
               createdAt: new Date(),
               updatedAt: new Date(),
               id_role:3
            },
            {
               nombre: "Juana",
               apellidos: "Administradora",
               fecha_de_nacimiento: "1966-07-23",
               email: "juana@juana.com",
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
      await queryInterface.bulkDelete("usuarios", {
         [Op.or]: [
            { nombre: "Jose" },
            { nombre: "Marta" },
            { nombre: "Robert" },
            { nombre: "Alice" },
            { nombre: "Ernesto" },
            { nombre: "Jack" },
            { nombre: "Ribs" },
            { nombre: "Antonio" },
            { nombre: "Juana" }
         ],
      });
   },
};