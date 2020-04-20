module.exports = function (app) {
    var selectEventosFiec2 = function (req, res, next) {
        var conection = app.infra.conectionFactory();
        var eventoDAO = new app.infra.eventoDAO(conection);
        var data = req.body;
        eventoDAO.selectEventosFiec2(data, function (err, result) {
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
    app.get('/selectEventosFiec2', selectEventosFiec2);
};