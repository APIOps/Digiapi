'use strict';

var url = require('url');


var Default = require('./DefaultService');


module.exports.newspapersDecadeDecadeGet = function newspapersDecadeDecadeGet (req, res, next) {
  Default.newspapersDecadeDecadeGet(req.swagger.params, res, next);
};
