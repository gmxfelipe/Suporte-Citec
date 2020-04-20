var formidable = require('formidable');
var fs = require('fs')
var variaveis = require('../../../var');
module.exports = function (app) {
    var upload = function (req, res, next) {
        var conection = app.infra.conectionFactory();
        var projetoDAO = new app.infra.projetoDAO(conection);
        var form = new formidable.IncomingForm();
        try {
            form.maxFileSize = 200 * 1024 * 1024;
            form.parse(req, function (erro, fields, files) {
                let oldPath = files.file.path; //foto -> nome campo no html
                let nome = files.file.name; //nome padrão para a foto
                let path = `/uploads/${nome}`; //caminho relativo, que irá para o banco
                let fullPath = variaveis.dir + path; //caminho "completo" para o sistema de arquivos
                fs.rename(oldPath, fullPath, (erro) => { //move o arquivo da memória para o disco (caminho do projeto)
                    if (erro) {
                        console.log(erro)
                        res.json({
                            err: erro,
                            status: 500
                        })
                    } else {
                        let data = {
                            idcandidatura: fields.id,
                            etapa: fields.etapa,
                            caminho: path,
                            nomeArquivo: nome
                        }
                        projetoDAO.inserirDocumentacao(data, function (err, result) {
                            if (err) {
                                res.json({
                                    result: err,
                                    status: 500
                                })
                                console.log(err);
                                conection.end();
                            } else {
                                res.json({
                                    result: result,
                                    status: 200
                                })
                                conection.end();
                            }
                        })
                    }
                });
            })
        } catch (error) {
            console.log(error);
            res.json({
                result: error,
                status: 500
            });
            conection.end();
        }
    }
    app.post('/upload', upload);
}