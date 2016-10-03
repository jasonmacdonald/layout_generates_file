/**
 * Created by jason.ibele on 10/3/2016.
 */
require('marko/node-require').install({compilerOptions: {
    writeToDisk: false
}});

require('marko/browser-refresh').enable();

var express = require('express');
var serveStatic = require('serve-static');

var app = express();
var port = 8080;

app.use('/static', serveStatic(__dirname + '/static'));

app.get('/', require('./src/pages/index'));

app.listen(port, function() {
    console.log('Server started! Try it out:\nhttp://localhost:' + port + '/');

    if (process.send) {
        process.send('online');
    }
});