const bunyan = require('bunyan');

let log = bunyan.createLogger({
    name: 'process.env.APP_NAME',
    streams: {
        level: info,
        path: '../tmp/app.log'
    }
});

module.exports = log;