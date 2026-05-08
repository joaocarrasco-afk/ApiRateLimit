const express = require('express');
const rateLimit = require("express-rate-limit");

const connectDatabase = require('./config/database');
const Pessoa = require('./models/Pessoa');

const app = express();
const PORT = 3000;

const limiter = rateLimit(
  {
  windowMs: 60 * 1000, // 1 minuto
  max: 5, // 5 requisições
  message: "Muitas requisições, tente novamente depois. Afonso RGM 0000"
}
);

app.use(limiter);

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ mensagem: 'API REST em Node.js com Express.' });
});

app.get('/pessoas', async (req, res) => {
  try {
    const pessoas = await Pessoa.find();
    res.status(200).json(pessoas);
  } catch (error) {
    res.status(500).json({
      mensagem: 'Erro ao buscar pessoas.',
      erro: error.message,
    });
  }
});

async function startServer() {
  try {
    await connectDatabase();
    app.listen(PORT, () => {
      console.log(`Servidor rodando em http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('Nao foi possivel iniciar a aplicacao.', error.message);
  }
}

startServer();