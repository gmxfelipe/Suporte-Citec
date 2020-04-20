// Rota que deleta um evento
module.exports = function (app) {
    var deleteEvento = function (req, res, next) {
        var conection = app.infra.conectionFactory();
        var eventoDAO = new app.infra.eventoDAO(conection);
        var data = req.params;
        eventoDAO.deleteEvento(data, function (err, result) {
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
    app.delete('/deleteEvento/:id', deleteEvento);
};