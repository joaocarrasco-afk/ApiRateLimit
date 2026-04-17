const mongoose = require('mongoose');

const MONGO_URI =
  'mongodb+srv://joaocarrasco2908_db_user:nkDVP6tKlQr0QcOo@cluster0.txpyl2o.mongodb.net/cadastro?appName=Cluster0';
                                                                                    

async function connectDatabase() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('MongoDB conectado com sucesso.');
  } catch (error) {
    console.error('Erro ao conectar no MongoDB:', error.message);
  }
}

module.exports = connectDatabase;