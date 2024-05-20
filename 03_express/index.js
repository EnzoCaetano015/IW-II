const express = require("express")
const app = express()

app.get('/',function(req,res){
    res.send('seja bem vindo baitola!')
})

app.get('/blog',function(req,res){
    res.send('Essa é página do Blog')
})

app.get('/sobre',function(req,res){
    res.send('Página sobre')
})

app.get('/cadastro/:nome/:idade',function(req,res){
    res.send('Olá seu nome: ' + req.params.nome + '\nSua idade: ' + req.params.idade)
    //res.send(req.params)
})


app.listen(8081, function (){
    console.log('Servidor girando e dançando em http://localhost:8081')
})
