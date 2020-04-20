var fs = require('fs');
var variaveis = require('../../../../var');
module.exports = function (app) {
    var excluirArquivo = function (req, res, next) {
        var conection = app.infra.conectionFactory();
        var projetoDAO = new app.infra.projetoDAO(conection);
        var data = req.params;
        while (data.caminho.includes("+")) {
            data.caminho = data.caminho.replace("+", "/");
        } // reformata o caminho para ficar de acordo com o padrão. Ele vem com esses '+' pois a rota se confundiria com o parametro com '/'.
        // Ex: '+updates+teste1.doc' se torna '/updates/teste1.doc'
        projetoDAO.excluirArquivo(data, function (err, result) {
            if (err) {
                res.json({
                    result: err,
                    status: 500
                });
                console.log(err);
                conection.end();
            } else {
                fs.unlink(variaveis.dir + data.caminho, (err) => { // exclui o arquivo
                    if (err) {
                        res.json({
                            result: err,
                            status: 500
                        });
                        console.log(err);
                        conection.end();
                    } else {
                        res.json({
                            result: result,
                            status: 200
                        });
                        conection.end();
                    }
                });
            }
        });
    };
    app.delete('/excluirArquivo/:id/:caminho', excluirArquivo);
};