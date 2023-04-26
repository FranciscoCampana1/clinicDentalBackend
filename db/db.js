const config = require("../config/config.json");
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
   process.env.MYSQLDATABASE || config.development.database,
   process.env.MYSQLUSER || config.development.username,
   process.env.MYSQLPASSWORD || config.development.password,
   {
      host: process.env.MYSQLHOST || config.development.host,
      port: process.env.MYSQLPORT || config.development.port || 3306,
      dialect: "mysql",
      pool: {
         max: 5,
         min: 0,
         acquire: 30000,
         idle: 10000,
      },
   }
);

module.exports = async () => {
   const dbConnection = await sequelize.authenticate();
   const database = process.env.MYSQL_DATABASE || config.development.database;
   console.log(`Successfully connected to '${database}' database`);
   return dbConnection;
};
