module.exports = function (app) {
    var selectEventosFiec1 = function (req, res, next) {
        var conection = app.infra.conectionFactory();
        var eventoDAO = new app.infra.eventoDAO(conection);
        var data = req.body;
        eventoDAO.selectEventosFiec1(data, function (err, result) {
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
    app.get('/selectEventosFiec1', selectEventosFiec1);
};