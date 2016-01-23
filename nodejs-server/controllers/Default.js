'use strict';

var url = require('url');


var Default = require('./DefaultService');


module.exports.journalsGet = function journalsGet (req, res, next) {
  Default.journalsGet(req.swagger.params, res, next);
};

module.exports.newspapersDecadeGet = function newspapersDecadeGet (req, res, next) {
  Default.newspapersDecadeGet(req.swagger.params, res, next);
};
