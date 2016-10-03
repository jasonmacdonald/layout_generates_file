/**
 * Created by jason.ibele on 10/3/2016.
 */
var template = require('./template.marko');

module.exports = function(req, res) {
    res.setHeader('Content-Type', 'text/html; charset=utf-8');

    template.render({

    }, res);
};