function projetoDAO(conection) {
    this._conection = conection;
}

// INSERTS

projetoDAO.prototype.inserirDocumentacao = function (data, callback) {
    this._conection.query('INSERT INTO documentacao VALUES(DEFAULT,?,?,?,?)',
        [data.idcandidatura, data.etapa, data.caminho, data.nomeArquivo], callback);
}; //insere a documentação de alguma candidatura no banco

// /INSERTS
// ---------------------------------------------------------------------------------------------------------------
// SELECTS

projetoDAO.prototype.selectDocumentacao = function (data, callback) {
    this._conection.query('SELECT * FROM documentacao WHERE candidatura = ? and etapa = ? and nomeArquivo = ?',
        [data.id, data.etapa, data.nomeArquivo], callback)
}; // seleciona um documento especifico de acordo com os parametros passados

projetoDAO.prototype.selectAllDocumentacao = function (data, callback) {
    this._conection.query('SELECT * FROM documentacao WHERE candidatura = ?',
        [data.id], callback)
} //seleciona todos dos documentos de uma candidatura

// /SELECTS
// ---------------------------------------------------------------------------------------------------------------
// DELETES

projetoDAO.prototype.excluirArquivo = function (data, callback) {
    this._conection.query('DELETE FROM documentacao WHERE id = ?',
        [data.id], callback)
} //deleta um documento especifico de acordo com o id passado 

// /DELETES
module.exports = function () {
    return projetoDAO;
};