const express = require("express")
const app = express()

app.get('/',function(req,res){
    res.sendFile(__dirname+'/paginas/index.html')
})

,
app.get('/sobre',function(req,res){
    res.sendFile(__dirname+'/paginas/sobre.html')
})

app.get('/sobre',function(req,res){
    res.send('Página sobre')
})

app.get('/ola/:nome/:idade',function(req,res){
    res.send('Olá seu nome: ' + req.params.nome + '\nSua idade: ' + req.params.idade)
    //res.send(req.params)
})


app.listen(8081, function (){
    console.log('Servidor girando e dançando em http://localhost:8081')
})
