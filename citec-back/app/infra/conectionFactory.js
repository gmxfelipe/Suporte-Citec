const mysql = require('mysql');
const credenciais = require('../../config/secret.json').mysql //Nome do banco, senha e etc...

function criarConexao() {
    return mysql.createConnection(credenciais) // cria a conexao com o banco 
}

module.exports = function () {
    return criarConexao
}