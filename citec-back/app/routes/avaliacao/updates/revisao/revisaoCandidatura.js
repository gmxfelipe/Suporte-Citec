// Rota que envia uma candidatura para a revisão
module.exports = function (app) {
    var revisaoCandidatura = function (req, res, next) {
        var conection = app.infra.conectionFactory();
        var avaliacaoDAO = new app.infra.avaliacaoDAO(conection);
        var data = req.body;
        avaliacaoDAO.revisaoCandidatura(data, function (err, result) {
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
    app.put('/revisaoCandidatura', revisaoCandidatura);
};