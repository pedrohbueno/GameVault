const session = require("express-session")
const {sessionStore} = require('../config/sequelizeConfig')
const sessionInit = function (app) {
    app.use(session({
        secret: 'ni_secret_secret',
        store: sessionStore,
        resave: false,
        saveUninitialized: false,
        cookie: {
            secure: false, // Altere para true se estiver usando HTTPS
            httpOnly: true,
            maxAge: 24 * 60 * 60 * 1000, // Tempo de vida do cookie em milissegundos (1 hora neste exemplo)
            path: '/', // Define o caminho para o qual o cookie é válido
            domain: 'localhost',
        }
    }))
}
module.exports = sessionInit;