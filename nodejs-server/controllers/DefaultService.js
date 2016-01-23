'use strict';

exports.newspapersDecadeDecadeGet = function(args, res, next) {
  /**
   * parameters expected in the args:
   * decade (String)
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
