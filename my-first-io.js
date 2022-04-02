var fs = require('fs')

var fichier = fs.readFileSync(process.argv[2])
var nombre2L = fichier.toString().split('\n').length - 1
console.log(nombre2L)