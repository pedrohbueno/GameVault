const express = require('express');
const router = express.Router();
const sessionController = require('../controllers/sessionController');

// Rota para adicionar um usuário
router.post('/protected', async (req, res) => {
    sessionController.protected(req, res);
});
router.post('/logout', async (req, res) => {
    sessionController.logout(req, res);
});

// Outras rotas relacionadas ao usuário podem ser adicionadas aqui...

module.exports = router;