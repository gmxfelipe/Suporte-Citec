const load = require('consign')
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
var variaveis = require('../var')
module.exports = function () {
    const app = express();

    app.use(express.static(path.join(variaveis.dir, 'citec')));

    app.use(cors());
    app.use(function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
        next();
    });
    app.use(bodyParser.urlencoded({
        extended: true
    }))

    app.use(bodyParser.json());
    load({
        cwd: 'app',
        locale: 'pt-br',
        verbose: false
    }).include('infra').then('routes').into(app);
    return app;
}