function eventoDAO(conection) {
    this._conection = conection;
}
//INSERTS

eventoDAO.prototype.cadastroEvento = function (data, callback) {

    //Formatação das datas inseridas no banco

    var formated_start = data.start.replace("T", " ");
    var formated_start_date = formated_start.split('.');

    var formated_end = data.end.replace("T", " ");
    var formated_end_date = formated_end.split('.');

    // /Formatação das datas inseridas no banco

    this._conection.query('INSERT INTO evento VALUES(DEFAULT,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',
        [data.iduser, data.id_agenda, data.titulo, data.cor, data.ano_start, data.mes_start, data.dia_start,
            data.hora_start, data.minuto_start, data.segundo_start, data.ano_end, data.mes_end,
            data.dia_end, data.hora_end, data.minuto_end, data.segundo_end, data.descricao, formated_end_date[0], formated_start_date[0]
        ], callback);
}; // insere no banco novos eventos

// /INSERTS
// -----------------------------------------------------------------------------
// SELECTS

eventoDAO.prototype.selectEventosFiec1 = function (data, callback) {
    this._conection.query('SELECT * FROM evento WHERE id_agenda = 1', callback);
}; // seleciona todos os eventos da Fiec1

eventoDAO.prototype.selectEventosFiec2 = function (data, callback) {
    this._conection.query('SELECT * FROM evento WHERE id_agenda = 2', callback);
}; // seleciona todos os eventos da Fiec2

eventoDAO.prototype.pegauser = function (data, callback) {
    this._conection.query('SELECT usuario.nome FROM usuario WHERE iduser = ?',
        [data.iduser], callback);
}; // seleciona o nome do usuário para criação do LOG(Não terminada a implantação) no momento que for cadastrado um evento

// /SELECTS
// -----------------------------------------------------------------------------
// DELETES

eventoDAO.prototype.deleteEvento = function (data, callback) {
    this._conection.query('DELETE FROM evento WHERE idevento = ?',
        [data.id], callback);
}; // deleta um evento de acordo com o id passado

// /DELETES

module.exports = function () {
    return eventoDAO;
};