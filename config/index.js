"use strict";
let nodeEnv = process.env.NODE_ENV || 'development';
let config = require('./config');

module.exports = config[nodeEnv];