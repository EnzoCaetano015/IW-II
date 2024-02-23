const lampada = document.getElementById('lamp')
const interruptor = document.getElementById('inte')
const txt = document.getElementById('txt')
// const quebrar = document.getElementById('quebrar')

function inte(){

    return lampada.src.indexOf('desligada') > -1

}

function inter(){

    

        if (inte()){

            lampada.src = 'img/ligada.jpg'
            txt.innerHTML = 'A lampada está ligada S2 '
        }

        else{

            lampada.src = 'img/desligada.jpg'
            txt.innerHTML = ' A lampada está desligada :0'

        }
    

}

interruptor.addEventListener('click',inter)