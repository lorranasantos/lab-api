import { createConnection } from 'typeorm';

createConnection()
  .then(async connection => {
    console.log('Conexão com o banco de dados estabelecida');
  })
  .catch(error => console.log('Erro ao conectar ao banco de dados:', error));
