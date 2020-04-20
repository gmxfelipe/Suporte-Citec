// Rota para selecionas as candidaturas que estão em desenvolvimento
module.exports = function (app) {
    var selectCandidaturasEmDesenvolvimento = function (req, res, next) {
        var conection = app.infra.conectionFactory();
        var avaliacaoDAO = new app.infra.avaliacaoDAO(conection);
        avaliacaoDAO.selectCandidaturasEmDesenvolvimento(function (err, result) {
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
    app.get('/selectCandidaturasEmDesenvolvimento', selectCandidaturasEmDesenvolvimento);
};