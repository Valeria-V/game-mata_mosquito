
var largura = 0
var altura  = 0
var vidas   = 1
var tempo   = 16

var criaMosquitoTempo = 1500

var nivel   = window.location.search  //recupera o nivel escolhido da index
nivel = nivel.replace('?', '')

//aplicando nivel, definindo tempo dos mosquitos
if(nivel === 'normal'){
    var criaMosquitoTempo = 1500
} else if(nivel === 'dificil'){
    var criaMosquitoTempo = 1000
} else if(nivel === 'extremo'){
    var criaMosquitoTempo = 800  
}

function ajustaTamanhoPalco() {
    altura = window.innerHeight
    largura = window.innerWidth
    document.getElementById('myBody').style.height = (altura-10)+'px';
    document.getElementById('myBody').style.width = (largura-10)+'px';
    console.log(altura, largura)
}

ajustaTamanhoPalco()

//tempo q acao deve ser executada de forma recorente, recupra o tempo e a cada 1s diminui 1
var cronometro = setInterval(function() {
    
    tempo -= 1

    //verifica se tempo é negativo
    if(tempo < 0){
        clearInterval(cronometro) //elimina funcao da memoria
        clearInterval(criaMosquito) //elimina funcao da memoria
        window.location.href='win.html'
    } else {    
    document.getElementById('cronometro').innerHTML = tempo
    }
}, 1000) 

//logica randomica
function posicaoRandomica() {

    //remover mosquito anterior (caso ja exista)
    if(document.getElementById('mosquito')){
        document.getElementById('mosquito').remove() //se existir elemto id mosquito, remove e um novo é gerado pela funco randomica
    
        if(vidas > 3){
         window.location.href='end_game.html'
        } else {
            document.getElementById('v' + vidas).src="/img/coracao_vazio.png"
        
            vidas++
        }
    }

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
mosquito.id = 'mosquito'
mosquito.onclick = function() {
    this.remove()
}

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
