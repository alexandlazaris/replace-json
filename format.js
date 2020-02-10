var fs = require('fs');
var fileName = './data.json';
var file = require(fileName);
var beautify = require('json-beautify')

var obj = JSON.parse(fs.readFileSync(fileName, 'utf8'));
fs.writeFileSync(fileName, beautify(obj, null, 2))