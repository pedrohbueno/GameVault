// pages/api/chat.js
import OpenAI from 'openai';

const handler = async (req, res) => {
    const apiKey = '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';
    const openai = new OpenAI({apiKey});

    try {
        const completion = await openai.chat.completions.create({
        messages: [
            { role: 'system', content: 'You are a helpful assistant.' },
            { role: 'user', content: 'Who won the world series in 2020?' },
            { role: 'assistant', content: 'The Los Angeles Dodgers won the World Series in 2020.' },
            { role: 'user', content: 'Where was it played?' },
        ],
        model: 'gpt-3.5-turbo-0613',
        });

        console.log(completion.choices[0]);
        res.status(200).json({ resposta: completion.choices[0].message.content });
    } catch (error) {
        console.error('Erro na requisição para a API:', error);
        res.status(500).json({ erro: 'Erro na requisição para a API', detalhes: error.message });
    }
};

export default handler;
