// Rota que insere um candidatura do tipo TCC Startup
module.exports = function (app) {
    var candidaturaTCC = function (req, res, next) {
        var conection = app.infra.conectionFactory();
        var candidaturaDAO = new app.infra.candidaturaDAO(conection);
        var data = req.body;
        candidaturaDAO.candidaturaTCC(data, function (err, result) {
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
    app.post('/candidaturaTCC', candidaturaTCC);
};