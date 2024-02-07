
    var altura = 0;
    var largura = 0;
    var vidas = 1;
    var tempo = 15;

    var criaMosquitoTempo = 1500;

    var nivel = window.location.search;
    nivel = nivel.replace('?', '');
    
    if(nivel === 'normal'){
        //1500
        var criaMosquitoTempo = 1500;
    } else if (nivel === 'dificil'){
        //1000
        var criaMosquitoTempo = 1000;
    } else if (nivel === 'hard'){
        //750
        var criaMosquitoTempo = 750;
    }

function ajustaTamanhoPalcoJogo(){
        altura = window.innerHeight;
        largura = window.innerWidth;

        console.log(altura, largura);
}
    ajustaTamanhoPalcoJogo();

    var cronometro = setInterval(function(){

        tempo -= 1;

        if(tempo < 0){
            clearInterval(cronometro);
            clearInterval(criaMosquito);
            window.location.href = 'win.html'
        } else{
        document.getElementById('cronometro').innerHTML = tempo;
        }
    }, 1000);


function posicaoRandomica(){

    //Remover mosquito anterior (caso exista)
    if(document.getElementById('mosquito')){
        document.getElementById('mosquito').remove();

        //console.log('elemento selecionado foi v' + vidas );
        if(vidas > 3){
            
            window.location.href = 'gameover.html';
        } else {
        document.getElementById('v' + vidas).src="imagens/coracao_vazio.png";
        
        vidas++;
    }
}

    var posicaoX = Math.floor( Math.random() * largura) - 90;
    var posicaoY = Math.floor(Math.random() * altura) - 90;

    posicaoX = posicaoX < 0 ? 0 : posicaoX;
    posicaoY = posicaoY < 0 ? 0 : posicaoY;
    
    console.log(posicaoX, posicaoY);

    //Criar elemento HTML
    var mosquito = document.createElement('img');
    mosquito.src = 'imagens/mosquito.png';
    mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio();
    mosquito.style.left = posicaoX + 'px';
    mosquito.style.top = posicaoY + 'px';
    mosquito.style.position = 'absolute';
    mosquito.id = 'mosquito';
    mosquito.onclick = function(){
        this.remove();
    }

    document.body.appendChild(mosquito);
    
}

function tamanhoAleatorio(){
    var classe = Math.floor(Math.random() * 3);
    console.log(classe);

    switch(classe){
        case 0: 
        return 'mosquito1';

        case 1: 
        return 'mosquito2';

        case 2: 
        return 'mosquito3';
    }
}

function ladoAleatorio(){
    var classe = Math.floor(Math.random() * 2);

    switch(classe){
        case 0: 
        return 'ladoA';

        case 1: 
        return 'ladoB';
    }

}