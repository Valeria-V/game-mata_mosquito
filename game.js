
var largura = 0
var altura  = 0

function ajustaTamanhoPalco() {
    altura = window.innerHeight
    largura = window.innerWidth

    //console.log(altura, largura)
}

ajustaTamanhoPalco() 

function posicaoRandomica() {
    var positionX = Math.floor (Math.random() * largura)
var positionY = Math.floor (Math.random() * altura)

console.log(positionX, positionY)

//criar elemento html - DOOM
var mosquito = document.createElement('img')  //criando variavel para pegar imagem do html
mosquito.src = 'img/mosquito.png'
mosquito.className = 'mosquito1'
mosquito.style.left = positionX + 'px'
mosquito.style.top = positionY + 'px'
mosquito.style.position = 'absolute'

document.body.appendChild(mosquito)          //criando elemento no body do html
}
