const dbConfig = require('../config/db');
const Sequelize = require('sequelize');
const sequelize = new Sequelize(
  dbConfig.DB,
  dbConfig.USER,
  dbConfig.PASSWORD,{
    host:dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorAlias:false,
    pool:{
      max:dbConfig.pool.max,
      min:dbConfig.pool.min,
      acquire:dbConfig.pool.acquire,
      idle: dbConfig.pool.idle
    },
  }
);
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

// definisi semua models yang ada pada aplikasi
db.quizzes = require('../config/quiz')(sequelize, Sequelize);
module.exports = db;