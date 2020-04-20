module.exports = function (app) {
    var selectAllmodelos = function (req, res, next) {
        var conection = app.infra.conectionFactory();
        var processoDAO = new app.infra.processoDAO(conection);
        processoDAO.selectAllmodelos(function (err, result) {
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
    app.get('/selectAllmodelos', selectAllmodelos);
};