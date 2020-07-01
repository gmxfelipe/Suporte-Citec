var formidable = require('formidable');
const multer = require('multer')
var fs = require('fs')
var variaveis = require('../../../var');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads')
    }
})

const teste = multer({storage})

module.exports = function (app) {
    var upload = function (req, res, next) {
        console.log('teste');
        var conection = app.infra.conectionFactory();
        var projetoDAO = new app.infra.projetoDAO(conection);
        console.log(req.fields)
        try {
                let oldPath = req.file.path; //foto -> nome campo no html
                let nome = req.file.originalname; //nome padrão para a foto
                let path = `/uploads/${nome}`; //caminho relativo, que irá para o banco
                let fullPath = req.file.destination+'/'+nome; //caminho "completo" para o sistema de arquivos
                fs.rename(oldPath, fullPath, (erro) => { //move o arquivo da memória para o disco (caminho do projeto)
                    if (erro) {
                        console.log(erro)
                        res.json({
                            err: erro,
                            status: 500
                        })
                    } else {
                        let data = {
                            idcandidatura: 1,
                            etapa: '',
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
        } catch (error) {
            console.log(error);
            res.json({
                result: error,
                status: 500
            });
            conection.end();
        }
    }
    app.post('/upload', teste.single('file'), upload);
}