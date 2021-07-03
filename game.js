
var largura = 0
var altura  = 0

function ajustaTamanhoPalco() {
    altura = window.innerHeight
    largura = window.innerWidth

    //console.log(altura, largura)
}

ajustaTamanhoPalco() 

//logica randomica
function posicaoRandomica() {
    var positionX = Math.floor (Math.random() * largura) -90
    var positionY = Math.floor (Math.random() * altura)  -90

positionX = positionX < 0 ? 0 : positionX     //operador ternario: se posicaoX receber < 0 entao será 0, assim nao sera criada img valor negativa
positionY = positionY < 0 ? 0 : positionY     //operador ternario: se posicaoY receber < 0 entao será 0, assim nao sera criada img valor negativa

console.log(positionX, positionY)

//criar elemento html - DOOM
var mosquito = document.createElement('img')  //criando variavel para pegar imagem do html
mosquito.src = 'img/mosquito.png'
mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
mosquito.style.left = positionX + 'px'
mosquito.style.top = positionY + 'px'
mosquito.style.position = 'absolute'

document.body.appendChild(mosquito)          //criando elemento no body do html

ladoAleatorio()

}

function tamanhoAleatorio() {
    var classe = Math.floor (Math.random() * 3)  //valor randomico entre 1 e quase 3

    switch(classe){                             //escolhe um valor(case)
        case 0:
            return 'mosquito1'                  //se 0 mosquito1
        case 1:
            return 'mosquito2'                  //se 0 mosquito2
        case 2:
            return 'mosquito3'                  //se 0 mosquito3

    }
}

function ladoAleatorio(){ // criar classe para alterar o lado da imagem
    var classe = Math.floor (Math.random() * 2)  //valor randomico entre 0 e quase 1

    switch(classe){                             //escolhe um valor(case)
        case 0:
            return 'ladoA'                  //se 0 mosquito1
        case 1:
            return 'ladoB'                  //se 0 mosquito2

    }
}
