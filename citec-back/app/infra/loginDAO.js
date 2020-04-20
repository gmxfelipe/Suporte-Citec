function loginDAO(conection) {
    this._conection = conection;
}

// SELECTS

loginDAO.prototype.login = function (data, callback) {
    this._conection.query('SELECT count(*) as count FROM usuario WHERE email=? and senha=sha2(?,512)',
        [data.email, data.senha], callback);
}; //verifica se existe o usuário passado com o email e senha corretos

loginDAO.prototype.pegaLogin = function (data, callback) {
    this._conection.query('SELECT usuario.iduser, usuario.nome, usuario.tipo FROM usuario WHERE email=? and senha=sha2(?,512)',
        [data.email, data.senha], callback);
}; //seleciona alguns dados do usuario que serão utilizados(Ex: id, nome, tipo do usuário)

// /SELECTS

module.exports = function () {
    return loginDAO;
};