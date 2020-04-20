// Rota que insere um candidatura do tipo Projeto Externo
module.exports = function (app) {
    var candidaturaEXTERNO = function (req, res, next) {
        var conection = app.infra.conectionFactory();
        var candidaturaDAO = new app.infra.candidaturaDAO(conection);
        var data = req.body;
        candidaturaDAO.candidaturaEXTERNO(data, function (err, result) {
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
    app.post('/candidaturaEXTERNO', candidaturaEXTERNO);
};