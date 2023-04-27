# Clínica Dental

<details>
  <summary>Contenido 📝</summary>
  <ol>
    <li><a href="#sobre-el-proyecto">Sobre el proyecto</a></li>
    <li><a href="#stacks">Stack</a></li>
    <li><a href="#diagrama-bd">Diagrama</a></li>
    <li><a href="#instalación-en-local">Instalación</a></li>
    <li><a href="#endpoints">Endpoints</a></li>
  </ol>
</details>

## Deploy
<p>Click <a href="https://clinicdental-production.up.railway.app/">hear </a>for go to the databases on Railway in Production  </p>

Como clientes podremos: 
<ol>
<li>Crear una cita</li>
<li>Revisar nuestras propias citas</li>
<li>Modificar nuestras citas</li>
<li>Eliminar nuestras citas</li>
<li>Revisar nuestro perfil</li>
<li>Actualizar nuestro perfil</li>
</ol>
Como Doctores podremos: 
<ol>
<li>Ver nuestro perfil</li>
<li>Editar nuestro perfil</li>
<li>Comprobar todas las citas existentes</li>
</ol>
Como Admin podremos:
<ol>
<li>Realizar todo lo anterior mencionado</li>
<li>Comprobar todos los clientes existentes</li>
</ol>

---

## Stack
Tecnologías utilizadas:
<div>
</a>
<a href="https://www.expressjs.com/">
    <img src= "https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB"/>
</a>
<a href="https://nodejs.org/es/">
    <img src= "https://img.shields.io/badge/node.js-026E00?style=for-the-badge&logo=node.js&logoColor=white"/>
</a>
<a href="https://developer.mozilla.org/es/docs/Web/JavaScript">
    <img src= "https://img.shields.io/badge/javascipt-EFD81D?style=for-the-badge&logo=javascript&logoColor=black"/>
</a>
<a href="https://jwt.io/">
    <img src= "https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens"/>
</a>
<a href="https://www.postman.com/">
    <img src= "https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white"/>
</a>
<a href="https://www.mysql.com/">
    <img src= "https://img.shields.io/badge/mysql-3E6E93?style=for-the-badge&logo=mysql&logoColor=white"/>
</a>
<a href="https://www.github.com/">
    <img src= "https://img.shields.io/badge/github-24292F?style=for-the-badge&logo=github&logoColor=white"/>
</a>
<a href="https://git-scm.com/">
    <img src= "https://img.shields.io/badge/git-F54D27?style=for-the-badge&logo=git&logoColor=white"/>
</a>
<a href="https://www.docker.com/">
    <img src= "https://img.shields.io/badge/docker-2496ED?style=for-the-badge&logo=docker&logoColor=white"/>
</a>
<a href="https://www.sequelize.org/">
    <img src= "https://img.shields.io/badge/sequelize-3C76C3?style=for-the-badge&logo=sequelize&logoColor=white"/>
</a>
 </div>
 
 ---

 ## Diagrama de la Base de Datos
   <img src="./_images/diagrama de base de datos.png" alt="imagen de diagrama de base de datos">

 ---

 ## Instalación 
1. Clonar el repositorio
2. ` $ npm install `
3. Conectamos nuestro repositorio con la base de datos 
4. ``` $ Ejecutamos las migraciones: npx sequelieze-cli db:migrate ``` 
5. ``` $ Ejecutamos los seeders: npx sequelize-cli db:seed:all ``` 
6. ``` $ npm run dev ``` 

---

## Endpoints

<details>
<summary>Endpoints</summary>

- AUTH

- REGISTRAR USUARIO

       POST http://localhost:3000/auth/register/

  body:

  ```js
   {
       "nombre": "Luisito",
       "apellidos": "Comunica",
       "fecha_de_nacimiento":" 2000-05-05",
       "email": "luis@luis.com",
       "telefono": "66678945",
       "password": "12345678"
   }
  ```

- LOGIN

       POST  http://localhost:3000/auth/login

  body:

  ```js
  {
      "email": "jose@correo.com",
      "password":"12345678"
  }
  ```

- USUARIO

- PERFIL DE USUARIO

        GET  http://localhost:3000/usuarios/getprofile

  body:

  ```js
  {
      "email": "jose@correo.com",
      "password":"12345678"
  }
  ```

- MODIFICAR PERFIL DE USUARIO

      PUT  http://localhost:3000/usuarios/updateprofile

  body:

  ```js
  {
      "nombre": "cesar",
      "apellidos": "Pala"
      ...
      ...
      ...
  }
  ```

- CREACION DE CITAS

       POST  http://localhost:3000/citas/createcita/

  body:

  ```js
  {
      "id_odontologo":1,
      "fecha": "2023-05-15",
      "horario": "20:00:00"
  }
  ```

- VER CITAS COMO CLIENTE

       GET  http://localhost:3000/citas/cita

- MODIFICAR CITAS

      PUT  http://localhost:3000/citas/updatecita/1

  body:

  ```js
      {
          "fecha": "2023-06-20",
          "horario": "01:00:00"
      }
  ```

- ELIMINAR CITAS

       DELETE  http://localhost:3000/citas/deletecita/1

       (requiere el id de la cita por params)

- ODONTOLOGO

- VER CITAS COMO ODONTOLOGO

       GET  http://localhost:3000/citas/cita/odontologo/

- ADMIN

- VER TODAS LAS CITAS

       GET  http://localhost:3000/usuarios?page=1

- REGISTRAR ODONTOLOGO

       POST http://localhost:3000/auth/register/odontologo

  body:

  ```js
      {
          "nombre": "Luisito",
          "apellidos": "Nocomunica",
          "fecha_de_nacimiento":" 2000-05-05",
          "email": "luis@luis.com",
          "matriculaOdontologo":"123654789",
          "telefono": "66678945",
          "password": "12345678"
       }
  ```

  </details>

## Team:

**_César Parada_**  
<a href="https://github.com/Cesarparada" target="_blank"><img src="https://img.shields.io/badge/github-24292F?style=for-the-badge&logo=github&logoColor=orange" target="_blank"></a>

**_Francisco Campana_**  
<a href="https://github.com/FranciscoCampana1" target="_blank"><img src="https://img.shields.io/badge/github-24292F?style=for-the-badge&logo=github&logoColor=white" target="_blank"></a>

## Agradecimientos:

- **_Prof. Fidel Guilart_**

## Contacto



**_Francisco Campana_**  
<a href="https://github.com/FranciscoCampana1" target="_blank"><img src="https://img.shields.io/badge/github-24292F?style=for-the-badge&logo=github&logoColor=white" target="_blank"></a>

<a href="mailto:cesard.0925@gmail.com"><img src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white"></a>

<a href="https://www.linkedin.com/in/linkedinUser/" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank"></a>

</p>