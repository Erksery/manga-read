const Sequelize = require("sequelize");

const sequelizeUsersData = new Sequelize(
  "usersDatabase",
  "root",
  "<vitaly></vitaly>",
  {
    dialect: "mysql",
    host: "localhost",
    define: {
      timestamps: false,
    },
  },
);

const sequelizeMangaDatabase = new Sequelize(
  "mangadatabase",
  "root",
  "<vitaly></vitaly>",
  {
    dialect: "mysql",
    host: "localhost",
    define: {
      timestamps: false,
    },
  },
);

module.exports = { sequelizeUsersData, sequelizeMangaDatabase };
