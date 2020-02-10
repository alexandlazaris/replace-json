var fs = require('fs')

// source of JSON data
var fileName = './data.json' 
var file = require(fileName)
var replacingValue = 'This is a new value'

console.log(`New value > ${replacingValue}`)
var obj = JSON.parse(fs.readFileSync(fileName, 'utf8'))

//use file + JSON key
file.key = replacingValue 

fs.writeFile(fileName, JSON.stringify(file), function (err) {
  if (err) return console.log(err)
  console.log(JSON.stringify(file))
  console.log('Writing to ' + fileName)
});

// Logs each key:value pair
// Object.keys(obj).forEach(function(key) {
//   console.log('Key : ' + key + ', Value : ' + obj[key])
// })