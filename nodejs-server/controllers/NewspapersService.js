'use strict';

exports.newspapersGet = function(args, res, next) {
  /**
   * parameters expected in the args:
   **/

var examples = {};
  
  examples['application/json'] = [ {
  "publisher_name" : "aeiou",
  "logo_url" : "aeiou",
  "id" : 123456789,
  "tag" : "aeiou",
  "title" : "aeiou"
} ];
  

  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}
exports.newspapersYearGet = function(args, res, next) {
  /**
   * parameters expected in the args:
   * year (String)
   **/

var examples = {};
  
  examples['application/json'] = [ {
  "publisher_name" : "aeiou",
  "logo_url" : "aeiou",
  "id" : 123456789,
  "tag" : "aeiou",
  "title" : "aeiou"
} ];
  

  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}
exports.newspapersYearMonthGet = function(args, res, next) {
  /**
   * parameters expected in the args:
   * year (String)
   * month (String)
   **/

var examples = {};
  
  examples['application/json'] = [ {
  "publisher_name" : "aeiou",
  "logo_url" : "aeiou",
  "id" : 123456789,
  "tag" : "aeiou",
  "title" : "aeiou"
} ];
  

  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}
