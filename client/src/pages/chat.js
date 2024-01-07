// pages/chat.js

import { useState } from 'react';

const ChatComponent = () => {
  const [response, setResponse] = useState('');

  const handleEnviar = async () => {
    try {
      const res = await fetch('/api/chat');
      const data = await res.json();
      setResponse(data.resposta);
    } catch (erro) {
      console.error('Erro na requisição para a API:', erro);
    }
  };
  

  return (
    <div>
        <button onClick={handleEnviar}>Enviar</button>
        <p>Pergunta: Olá, como você está?</p>
        <p>Resposta: {response}</p>
    </div>
  );
};

export default ChatComponent;
