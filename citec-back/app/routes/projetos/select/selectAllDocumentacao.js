module.exports = function (app) {
    var selectAllDocumentacao = function (req, res, next) {
        var conection = app.infra.conectionFactory();
        var projetoDAO = new app.infra.projetoDAO(conection);
        var data = req.params;
        projetoDAO.selectAllDocumentacao(data, function (err, result) {
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
    };
    app.get('/selectAllDocumentacao/:id', selectAllDocumentacao);
};