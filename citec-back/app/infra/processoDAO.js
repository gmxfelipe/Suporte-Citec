function processoDAO(conection) {
    this._conection = conection;
}

// INSERTS

processoDAO.prototype.inserirmodelos = function (data, callback) {
    this._conection.query('INSERT INTO modelos VALUES(DEFAULT,?,?,?)',
        [data.etapa, data.caminho, data.nomeArquivo], callback);
}; // insere os modelos de documentação

// INSERTS
// -------------------------------------------------------------------
// SELECTS

processoDAO.prototype.selectModelos = function (data, callback) {
    this._conection.query('SELECT * FROM modelos WHERE id = ?',
        [data.id], callback)
} //seleciona o modelo de acordo com o id passado

processoDAO.prototype.selectAllmodelos = function (callback) {
    this._conection.query('SELECT * FROM modelos', callback)
} //seleciona todos os modelos existentes

// SELECTS
// -------------------------------------------------------------------
// DELETES

processoDAO.prototype.excluirModelo = function (data, callback) {
    this._conection.query('DELETE FROM modelos WHERE id = ?',
        [data.id], callback)
} //deleta um modelo de acordo com o id passado

// /DELETES
module.exports = function () {
    return processoDAO;
};