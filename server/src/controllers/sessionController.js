// userController.js
const sessionService = require('../services/sessionService');
class sessionController {
  static async protected(req, res){
    try{
      console.log("Sessão:", req.session);
      const user = req.session.user;
      console.log("User:", user)
      if (user) {
          res.status(200).json({ user, success: true });
      } else {
          res.status(401).json({ message: 'Usuário não autenticado' });
      }
    }catch (error){
      console.error('Erro no controlador no logout o usuário:', error);
      res.status(500)
    }
  }
  static async logout(req, res){
    try{
      const sessionId = req.session.id;
      console.log('IDSSS:',sessionId)
      if (!sessionId) {
        return res.sendStatus(400);
      }
      const result = await sessionService.destroySession(sessionId)
      if (result.success) {
        req.session.destroy((err) => {
          if (err) {
            console.error('Erro ao destruir a sessão:', err);
            return res.sendStatus(500)
          }
          res.clearCookie('session-id', {
            path: '/', // Define o caminho para o qual o cookie é válido
            domain: 'localhost',
          }); // Limpar o cookie de sessão do cliente
          res.sendStatus(200)
        });
      } else {
        return res.sendStatus(400)
      }

    } catch (error) {
      console.error('Erro no controlador no logout do usuário:', error);
      res.status(500).send('Erro interno do servidor');
    }
  }
}

module.exports = sessionController;
