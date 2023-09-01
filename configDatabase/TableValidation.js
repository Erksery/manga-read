const Sequelize = require("sequelize");
const {
  sequelizeUsersData,
  sequelizeMangaDatabase,
} = require("./sequlizeDatabase");

const UsersData = sequelizeUsersData.define("usersTest", {
  idUser: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },

  loginUser: {
    type: Sequelize.STRING(12),
    unique: true,
    allowNull: false,
  },
  passwordUser: {
    type: Sequelize.STRING(20),
    allowNull: false,
  },
  emailUser: {
    type: Sequelize.STRING(20),
    allowNull: false,
  },
  avatarUrl: {
    type: Sequelize.STRING(35),
    allowNull: false,
  },
});

const MangaTable = sequelizeMangaDatabase.define("mangaTable", {
  idManga: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },

  titleManga: {
    type: Sequelize.STRING(50),
    unique: true,
    allowNull: false,
  },
  rateManga: {
    type: Sequelize.STRING(20),
    allowNull: false,
  },
  coverImageManga: {
    type: Sequelize.STRING(100),
    allowNull: false,
  },
});

const ChaptersTable = sequelizeMangaDatabase.define("chaptersDataTable", {
  idChapter: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  numberChapter: {
    type: Sequelize.STRING(50),
    unique: false,
    allowNull: false,
  },
  imagesChapter: {
    type: Sequelize.STRING(1000),
    unique: false,
    allowNull: false,
  },
});

module.exports = { UsersData, MangaTable, ChaptersTable };
