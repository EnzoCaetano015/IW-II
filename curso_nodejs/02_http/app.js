//Solicitar um modulo interno do node chamado http
var http = require("http")

//Abrindo um servidor http
http.createServer(function(req,res){
    res.end("Oi ETEC MCM 2024")
}).listen(8081)

console.log("Servidor rodando")
