module.exports = function (app) {
    var login = function (req, res, next) {
        var conection = app.infra.conectionFactory();
        var loginDAO = new app.infra.loginDAO(conection);
        var data = req.body;
        loginDAO.login(data, function (err, resul) {
            if (err) {
                res.json({
                    result: err,
                    status: 500
                });
                console.log(err);
                conection.end();
            } else {
                count = resul; // armazena o resultado da função loginDAO.login
                loginDAO.pegaLogin(data, function (err, result) {
                    if (err) {
                        res.json({
                            result: err,
                            status: 500
                        });
                        conection.end();
                    } else {
                        res.json({
                            count: count, //resultado da função loginDAO.login
                            result: result,
                            status: 200
                        });
                        conection.end();
                    }
                });
            }
        });
    };
    app.post('/login', login);
};