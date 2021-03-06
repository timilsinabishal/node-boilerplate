"use strict";
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const config = require('./config');
const routes = require('./app/routes');
const ebl = require('express-bunyan-logger');
const models = require('./app/db/models');
let app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname, 'public')));
app.use(ebl());

routes.loadRoutes(app, __dirname + '/app/routes');

models.sequelize.sync().then(function () {
    let port = process.env.port || 3000;
    app.listen(port, function () {
        console.log(`Server started on port ${port}!`);
    });
});
