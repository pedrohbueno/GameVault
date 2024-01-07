const Session = require('../models/sessionModel');
class SessionService {
  static async destroySession(sessionId) {
    try {
        console.log('Service Id:', sessionId)
        const existingSession = await Session.findOne({
          attributes: ['session_id', 'data'],
          where: { session_id: sessionId },
        });
        console.log('Select Session:', existingSession)
        if (!existingSession) {
          return { error: 'Email não registrado.' };
        }
        await Session.destroy({
          where: {
            session_id: sessionId
          }
        });
    
        return { success: true };
    } catch (error) {
      console.error('Erro ao buscar todos os usuários:', error);
      throw error; // Você pode lidar com o erro de maneira adequada para sua aplicação
    }
  }

  // Outros métodos relacionados ao usuário podem ser adicionados aqui...

}

module.exports = SessionService;
