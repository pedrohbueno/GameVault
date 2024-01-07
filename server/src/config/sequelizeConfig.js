//src/config/sequelizeConfig.js
const { Sequelize } = require('sequelize');
const Session = require('express-session-sequelize')(require('express-session').Store);
const sequelize = new Sequelize({
    database: process.env.DB_DATABASE,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    dialect: 'mysql',
});
const sessionStore = new Session({
    db: sequelize,
    expiration: 24 * 60 * 60 * 1000, // Tempo de expiração da sessão em milissegundos (24 horas)
});

sequelize.authenticate().then(() => {
    console.log('Banco de dados Conectado.');
}).catch((error) => {
    console.error('Erro na conexão com o banco de dados: ', error);
});

sequelize.sync()

module.exports = { sequelize, sessionStore }