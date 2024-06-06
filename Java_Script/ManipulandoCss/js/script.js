/* Arquivo JS + alterar CSS */

let titulo = document.querySelector('h1')
titulo.textContent = 'Aula 09 Manipular CSS'
titulo.innerHTML = 'Manipulando CSS'
let imagem = document.querySelector('#foto')
imagem.setAttribute('src', 'img/fotojs.jpg')
imagem.setAttribute('width', '280px')

// /* MANIPULAR CSS */
document.querySelector('h1').style.color = "grey";
titulo.style.color = "white";
titulo.style.backgroundColor = "#2E2E2E";
titulo.style.borderBottom = "2px solid";
titulo.style.padding = "0.625rem";
titulo.style.borderRadius = "5px";

let box = document.querySelectorAll('.box')
box[0].setAttribute('class', 'escura')
box[0].removeAttribute('class')

/////// MODOS DE COR ///////
let tela = document.querySelector('main')


let btnDark = document.querySelector('#btdark')

let btnLight = document.querySelector('#btlight')

let btnPink = document.querySelector('#btpink')

let btnBlue = document.querySelector('#btblue')

let btnYellow = document.querySelector('#btyellow')


btnDark.addEventListener('click', modoDark)
btnLight.addEventListener('click', modoLight)
btnPink.addEventListener('click', modoPink )
btnBlue.addEventListener('click', modoBlue)
btnYellow.addEventListener('click', modoYellow)

function modoDark() {
    event.preventDefault();
    console.log('modo dark')
    tela.classList.add("dark");
    tela.classList.remove("light");
    tela.classList.remove("azul");
    tela.classList.remove("rosa");
    tela.classList.remove("amarelo");
}

function modoLight() {
    event.preventDefault();
    console.log('modo light')
    tela.classList.remove("azul");
    tela.classList.remove("rosa");
    tela.classList.remove("amarelo");
    tela.classList.remove("dark");
    tela.classList.add("light");
}

function modoPink() {
    event.preventDefault();
    console.log('modo Pink')
    tela.classList.remove("light");
    tela.classList.remove("dark");
    tela.classList.remove("azul");
    tela.classList.remove("amarelo");
    tela.classList.add("rosa");
    
}

function modoBlue() {
    event.preventDefault();
    console.log('modo Blue')
    tela.classList.remove("light");
    tela.classList.remove("dark");
    tela.classList.remove("rosa");
    tela.classList.remove("amarelo");
    tela.classList.add("azul");
    
}

function modoYellow() {
    event.preventDefault();
    console.log('modo Yellow')
    tela.classList.remove("light");
    tela.classList.remove("dark");
    tela.classList.remove("azul");
    tela.classList.remove("rosa");
    tela.classList.add("amarelo");
    
}


titulo.addEventListener('click', mudarId)
function mudarId() {
    titulo.id = 'titulo'
    console.log(titulo.id)
}
