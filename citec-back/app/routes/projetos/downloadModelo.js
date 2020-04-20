var variaveis = require('../../../var');
module.exports = function (app) {
    var downloadModelo = function (req, res, next) {
        var conection = app.infra.conectionFactory();
        var processoDAO = new app.infra.processoDAO(conection);
        var data = req.params;
        processoDAO.selectModelos(data, function (err, result) {
            if (err) {
                res.json({
                    result: err,
                    status: 500
                });
                console.log(err);
                conection.end();
            } else {
                if (result.length > 0) {
                    try {
                        //Retorna uma resposta de download, passando o caminho do arquivo e o nome do arquivo
                        res.download(variaveis.dir + result[0].caminho, result[0].nomeArquivo)
                    } catch {
                        res.json({
                            result: "Impossível localizar o arquivo",
                            status: 500
                        })
                    }
                    conection.end();
                } else {
                    res.json({
                        result: "Impossível localizar o arquivo",
                        status: 500
                    })
                    conection.end();
                }
            }
        });
    };
    app.get('/downloadModelo/:id', downloadModelo);
};