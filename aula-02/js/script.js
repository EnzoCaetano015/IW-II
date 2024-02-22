const ligar = document.getElementById('ligar')
const desligar = document.getElementById('desligar')
const lampada = document.getElementById('lamp')
const restaurar = document.getElementById('restaurar')
// const quebrar = document.getElementById('quebrar')

function estaQuebrada(){

    return lampada.src.indexOf('quebrada') > -1
    // isso retorna true or false

}

function lampLigada(){

    if (!estaQuebrada()){
    lampada.src = "img/ligada.jpg"
    }

}

function lampDesligada(){

    if(!estaQuebrada()){
    lampada.src = "img/desligada.jpg"
    }

}

function lampQuebrada(){

    lampada.src = "img/quebrada.jpg"

}

function lampRestaura(){

    lampada.src = "img/desligada.jpg"

}

ligar.addEventListener('click', lampLigada)
desligar.addEventListener('click', lampDesligada)
restaurar.addEventListener('click', lampRestaura )
// quebrar.addEventListener('click', lampquebrada)

lampada.addEventListener('mouseover', lampLigada)
lampada.addEventListener('mouseleave',lampDesligada)

lampada.addEventListener('dblclick', lampQuebrada)