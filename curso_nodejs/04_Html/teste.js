const Sequeleze = require('sequelize')
const sequeleze = new Sequeleze('test', 'root', '',{
    host:'localhost',
    dialect: 'mysql'
})

// sequileze.authenticate().then(function(){
//     console.log('OK, autenticado com sucesso')
// }).catch(function(erro){
//     console.log('ERRO:' + erro)
// })

const Postagem = sequeleze.define('postagens',{
    titulo:{
        type: Sequeleze.STRING
    },
    conteudo:{
        type: Sequeleze.TEXT
    }
})

const Usuario = sequeleze.define('usuarios',{
    nome:{
        type: Sequeleze.STRING
    },
    sobrenome:{
        type: Sequeleze.STRING
    },
    email:{
        type: Sequeleze.STRING
    },
    idade:{
        type: Sequeleze.INTEGER
    }
})

// Postagem.sync(force = true)
// Usuario.sync(force = true)

// Postagem.create({

//     titulo: 'PRIMEIRA POSTAGEM',
//     conteudo: 'bla, bla, bla, bla,bla'
// })