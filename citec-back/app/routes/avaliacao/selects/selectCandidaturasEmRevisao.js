// Rota para selecionas as candidaturas que foram enviadas para revisão
module.exports = function (app) {
    var selectCandidaturasEmRevisao = function (req, res, next) {
        var conection = app.infra.conectionFactory();
        var avaliacaoDAO = new app.infra.avaliacaoDAO(conection);
        avaliacaoDAO.selectCandidaturasEmRevisao(function (err, result) {
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
    app.get('/selectCandidaturasEmRevisao', selectCandidaturasEmRevisao);
};