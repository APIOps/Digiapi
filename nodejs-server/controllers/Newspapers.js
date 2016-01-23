'use strict';

var url = require('url');


var Newspapers = require('./NewspapersService');


module.exports.newspapersGet = function newspapersGet (req, res, next) {
  Newspapers.newspapersGet(req.swagger.params, res, next);
};

module.exports.newspapersIdIdGet = function newspapersIdIdGet (req, res, next) {
  Newspapers.newspapersIdIdGet(req.swagger.params, res, next);
};

module.exports.newspapersYearGet = function newspapersYearGet (req, res, next) {
  Newspapers.newspapersYearGet(req.swagger.params, res, next);
};

module.exports.newspapersYearMonthGet = function newspapersYearMonthGet (req, res, next) {
  Newspapers.newspapersYearMonthGet(req.swagger.params, res, next);
};
