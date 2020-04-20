// Rota que insere um candidatura do tipo Projeto Interno
module.exports = function (app) {
    var candidaturaINTERNO = function (req, res, next) {
        var conection = app.infra.conectionFactory();
        var candidaturaDAO = new app.infra.candidaturaDAO(conection);
        var data = req.body;
        candidaturaDAO.candidaturaINTERNO(data, function (err, result) {
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
    app.post('/candidaturaINTERNO', candidaturaINTERNO);
};