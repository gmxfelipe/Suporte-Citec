var variaveis = require('../../../var');
module.exports = function (app) {
    var download = function (req, res, next) {
        var conection = app.infra.conectionFactory();
        var projetoDAO = new app.infra.projetoDAO(conection);
        var data = req.params;
        projetoDAO.selectDocumentacao(data, function (err, result) {
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
                        // catch (err) como resolver problema de catch
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
    app.get('/download/:id/:etapa/:nomeArquivo', download);
};