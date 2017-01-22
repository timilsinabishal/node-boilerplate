"use strict";
let fs = require("fs");
let path = require("path");


//This function walks through the routes directory and loads all routes recursively
let loadRoutes = function(app, dir) {
    fs.readdir(dir, function(err, list) {
        if (err || !list.length) return;

        list.forEach(function(file) {
            file = path.resolve(dir, file);
            fs.stat(file, function(err, stat) {
                if (stat && stat.isDirectory()) {
                    loadRoutes(server, file)
                } else {
                    if (file.indexOf("index") == -1 && (/\.js$/i).test(file)){
                        let name = file.substr(0, file.indexOf('.'));
                        require(name)(app);
                    }
                }
            });
        });
    });
};

exports.loadRoutes = loadRoutes;