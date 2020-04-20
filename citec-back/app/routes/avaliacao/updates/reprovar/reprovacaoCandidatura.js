// Rota para reprovar uma candidatura
module.exports = function (app) {
    var reprovacaoCandidatura = function (req, res, next) {
        var conection = app.infra.conectionFactory();
        var avaliacaoDAO = new app.infra.avaliacaoDAO(conection);
        var data = req.body;
        console.log(data);
        avaliacaoDAO.reprovacaoCandidatura(data, function (err, result) {
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
                console.log(result);
                conection.end();
            }
        });
    };
    app.put('/reprovacaoCandidatura', reprovacaoCandidatura);
};